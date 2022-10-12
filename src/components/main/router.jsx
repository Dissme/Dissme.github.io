import { MicroComponent } from '@easythings/easy-view/jsx-runtime';

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

function getEle(X, fallback, params, query, children) {
  if (X.postMessage) return <MicroComponent port={X} />;
  if (typeof X === 'function')
    return (
      <X params={params} query={query}>
        {children}
      </X>
    );
  return (
    fallback ?? (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">加载中...</div>
    )
  );
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
