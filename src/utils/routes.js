const entries = import.meta.webpackContext('@/pages', {
  recursive: true,
  regExp: /\.jsx$/,
  exclude: /components\/|\.worker\.jsx$/,
});

export const routes = entries
  .keys()
  .map((k) => {
    const path = `/${k.replace(/(\.\/|(\/?index)?\.jsx)/g, '')}`;
    const module = entries(k);
    return {
      path,
      component: module.default,
    };
  })
  .filter((ret) => !!ret);
