const entries = require.context('@/pages', true, /.jsx$/, 'lazy');

export const routes = entries
  .keys()
  .map((k) => {
    if (/components\//.test(k)) return;
    const path = `/${k.replace(/(\.\/|(\/?index)?\.jsx)/g, '')}`;
    return {
      path,
      component: () => entries(k),
    };
  })
  .filter((ret) => !!ret);
