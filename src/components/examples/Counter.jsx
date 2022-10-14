export function Counter() {
  let i = '0';
  return <div on-click={() => i++}>Count is: {i}</div>;
}
