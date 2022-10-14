import { use } from '@easythings/easy-view';
if (document.referrer) history.replaceState(null, '', document.referrer);

let lastUrl = getURL();
const dispatchers = new Set();

function onLoad() {
  onPopState();
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target;
      if (a?.localName !== 'a' || a.target === '_blank' || a.origin !== location.origin) return;
      if (a.pathname === lastUrl.pathname && a.search === lastUrl.search) return;
      e.preventDefault();
      history.pushState(null, '', a.href);
      onPopState();
    },
    {
      capture: true,
    },
  );
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

window.addEventListener('DOMContentLoaded', onLoad);
window.addEventListener('popstate', onPopState);

use({
  route(target, dispatch) {
    dispatch(lastUrl);
    dispatchers.add(dispatch);
    return () => {
      dispatchers.delete(dispatch);
    };
  },
});
