import { use } from '@easythings/easy-view';

let lastUrl = getURL();
const dispatchers = new Set();
const containers = new WeakSet();

function onClick(e) {
  const a = e.target;
  if (a?.localName !== 'a' || a.target === '_blank' || a.origin !== location.origin) return;
  if (a.pathname === lastUrl.pathname && a.search === lastUrl.search) return;
  e.preventDefault();
  history.pushState(null, '', a.href);
  onPopState();
}

function onPopState() {
  lastUrl = getURL();
  dispatchers.forEach((fn) => fn(lastUrl));
}

function getURL() {
  return {
    pathname: location.pathname,
    hash: location.hash,
    search: location.search,
    cancelBubble: true,
  };
}

window.addEventListener('DOMContentLoaded', onPopState);
window.addEventListener('popstate', onPopState);

use({
  route: {
    init(container) {
      if (containers.has(container)) return;
      container.addEventListener('click', onClick, {
        capture: true,
      });
    },
    call(container, target, dispatch) {
      containers.add(container);
      dispatch(lastUrl);
      dispatchers.add(dispatch);
      return () => {
        dispatchers.delete(dispatch);
      };
    },
  },
});
