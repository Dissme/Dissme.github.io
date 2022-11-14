function parseQuery(url) {
  const qs = url.search.split(/\?|&/);
  return qs.reduce((obj, str) => {
    const [key, value] = str.split('=');
    if (key) obj[key] = value;
    return obj;
  }, {});
}

function getParams(path, url) {
  const patterns = path.split('/');
  const names = url.pathname.split('/');
  const len = patterns.length;
  const params = {};
  if (len !== names.length) return false;
  const reg = /^(_|:)(.+)/;
  let i = -1;
  while (++i < len) {
    const pattern = patterns[i];
    const matched = pattern.match(reg);
    const name = names[i];
    if (matched) {
      params[matched[2]] = name;
      continue;
    }
    if (pattern === name) continue;
    return false;
  }
  return params;
}

function useUrl(hook, paths = () => []) {
  let url = null;
  let matched = [];
  let paramsObj = {};
  let query = {};
  hook.route.on(({ detail }) => {
    url = detail;
    paramsObj = {};
    matched = paths().filter((path) => (paramsObj[path] = getParams(path, url)));
    query = parseQuery(url);
    hook.matched(matched);
    hook.update();
  });
  return {
    url: () => url,
    matched: () => matched.length > 0,
    params: (path) => paramsObj[path],
    query: () => query,
  };
}

function loadComponent(loadFn, hook) {
  if (!loadMap.has(loadFn)) loadMap.set(loadFn, loadFn());
  const com = loadMap.get(loadFn);
  if (com instanceof Promise) {
    com.then((c) => {
      loadMap.set(loadFn, c.default || c);
      hook.update();
    });
  }
  return com;
}

function Loading() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 contrast-200 text-xl">
      <svg
        class="absolute animate-spin animation-delay-[30] text-cyan-500 -top-1 w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <svg
        class="absolute animate-spin left-1 text-red-500 w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <svg
        class="animate-spin animation-delay-[30] w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}

function getEle(X, fallback, params, query, children) {
  if (typeof X === 'function')
    return (
      <X params={params} query={query}>
        {children}
      </X>
    );
  return fallback ?? <Loading />;
}

const loadMap = new WeakMap();

export function Route(props, children, hook) {
  const { matched, params, query } = useUrl(hook, () => [props.path]);

  function ele() {
    let com = props.component;
    if (props.lazy) com = loadComponent(com, hook);
    return getEle(com, props.fallback, params(props.path), query(), children);
  }

  return <>{matched() && ele()}</>;
}

export function Switch(props, children, hook) {
  let inited = false;
  hook.route.before(() => (inited = true));
  const filterdChildren = () => children.filter((child) => child.tag === Route);
  const paths = () => filterdChildren().map(({ props: { path } }) => path);
  const { params, matched, query } = useUrl(hook, paths);

  function renderChild(child) {
    const p = params(child.props.path);
    if (!p) return;
    let com = child.props.component;
    if (child.props.lazy) com = loadComponent(com, hook);
    return getEle(com, child.props.fallback, p, query(), child.children);
  }

  return <>{matched() ? filterdChildren().map(renderChild) : inited && props.fallback}</>;
}
