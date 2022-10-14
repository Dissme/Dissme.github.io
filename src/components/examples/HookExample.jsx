export function Example(props, children, hook) {
  const logs = [];
  hook.click.before((e) => {
    logs.push({ beforeClick: e.detail });
  });
  hook.click.on((e) => {
    logs.push({ clicked: e.detail });
  });
  hook.click(123); // 触发click事件

  return <>{JSON.stringify(logs)}</>;
}
