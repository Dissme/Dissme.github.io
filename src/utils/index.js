import intersection from './intersection';

export function createObserve(initial = '') {
  const hooks = new Set();

  function observe(...args) {
    if (args.length > 0) {
      initial = args[0];
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

  return observe;
}

export function propsProxy(props) {
  return new Proxy(props, {
    get(t, k, r) {
      return () => Reflect.get(t, k, r);
    },
  });
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
