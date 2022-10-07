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

export const customEvents = {
  intersection,
  mounted(target, dispatch) {
    setTimeout(() => {
      dispatch();
    }, 0);
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
