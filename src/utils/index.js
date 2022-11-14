import { methods } from '@/utils/constants';
import { MethodChannel } from '@easythings/easy-view/jsx-runtime';
import intersection from './intersection';

export function createObserve(initial = '') {
  const hooks = new Set();
  const watchers = new Set();

  function observe(...args) {
    if (args.length > 0) {
      initial = args[0];
      watchers.forEach((cb) => cb());
      hooks.forEach((hook) => hook?.update(true));
    }
    return initial;
  }

  observe.collect = (hook) => {
    hooks.add(hook);
    hook.destroy.before(() => {
      hooks.delete(hook);
    });
  };

  observe.watch = (cb) => {
    watchers.add(cb);
  };

  observe.unWatch = (cb) => {
    watchers.delete(cb);
  };

  return observe;
}

const propsMap = new WeakMap();
export function propsProxy(props) {
  if (!propsMap.has(props)) {
    propsMap.set(
      props,
      new Proxy(props, {
        cached: {},
        get(t, k, r) {
          if (this.cached[k]) return this.cached[k];
          return (this.cached[k] = () => Reflect.get(t, k, r));
        },
      }),
    );
  }
  return propsMap.get(props);
}

const unmountMap = new WeakMap();

export const customEvents = {
  intersection,
  mounted(target, dispatch) {
    let timer = setTimeout(() => {
      dispatch({ cancelBubble: true });
    }, 0);
    return () => {
      timer = clearTimeout(timer);
      unmountMap.get(target)?.({ cancelBubble: true });
    };
  },
  unmount(target, dispatch) {
    unmountMap.set(target, dispatch);
    return () => unmountMap.delete(target);
  },
  input: {
    format(e) {
      const target = e.target;
      let value = target.value;
      if (target.isContentEditable) {
        value = target.innerHTML;
      }
      return { value };
    },
  },
};

const workerCache = {};

export function createWorker(url, pid) {
  if (workerCache[url]) return workerCache[url];
  const worker = new Worker(url);
  workerCache[url] = worker;
  const channel = new MethodChannel();
  channel.register(methods.scrollIntoView, (id) => {
    if (!id) return;
    document.querySelector(`#${pid}`)?.shadowRoot?.querySelector?.(`#${id}`)?.scrollIntoView?.({
      block: 'start',
      inline: 'start',
      behavior: 'smooth',
    });
  });
  channel.connect(worker);
  return worker;
}
