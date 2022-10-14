export function Box(props, children) {
  return (
    <details className="text-sm" open>
      <summary className="cursor-pointer select-none py-2 pr-2 w-fit">
        {props.fileName || '示例'}
      </summary>
      {children}
    </details>
  );
}
