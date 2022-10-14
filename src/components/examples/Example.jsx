export function Example(props, children, hook) {
  let i = '0';
  hook.click.on(() => {
    i++;
  });
  return (
    <div>
      <div>props: {JSON.stringify(props)}</div>
      <div>children: {JSON.stringify(children[0].children)}</div>
      <div>clicked: {i}</div>
    </div>
  );
}
