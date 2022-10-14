import { propsProxy } from '@/utils';
import { Box } from './Box';

export const components = {
  h2: (props, children) => (
    <h2 className="font-bold text-xl text-slate-200" id={children[0] === 'string' && children[0]}>
      {children}
    </h2>
  ),
  blockquote: (props, children) => (
    <blockquote className="group text-justify leading-relaxed text-slate-400 mb-6">
      {children.reduce((arr, node) => {
        if (node.tag === components.p) arr.push(node.children);
        return arr;
      }, [])}
    </blockquote>
  ),
  p: (props, children) => <p className="text-justify leading-relaxed mb-2">{children}</p>,
  code: (props, children) => (
    <code className={`text-slate-400 ${props.className ?? ''}`}>{children}</code>
  ),
  pre: (props, children) => {
    const code = children[0];
    let fileName = '';
    const reg = /#(.*)\n$/;
    if (typeof code.children[0] === 'string' && reg.test(code.children[0])) {
      fileName = code.children[0].match(reg)[1];
    }

    return <Box fileName={fileName}>{renderCodeBlock(children[0], fileName)}</Box>;
  },
  strong: (props, children) => <strong className="text-base mr-2">{children}</strong>,
  a: (props, children) => (
    <a href={props.href} className="text-sky-500 decoration-current decoration-wavy underline">
      {children}
    </a>
  ),
  img: (props) => <img {...props} crossOrigin />,
};

function renderCodeBlock(code, fileName) {
  if (!code) return;
  return (
    <code className={code.props?.className}>
      {code.children?.map?.((child, i) => {
        if (i === 0 && fileName) return;
        return child;
      })}
    </code>
  );
}

export function Layout(props, children) {
  const { noBg } = propsProxy(props);
  const filterdChildren = () =>
    children
      .filter((child) => child.key)
      .reduce((arr, child) => {
        const groupName = child.props.group;
        if (!arr[groupName]) {
          const group = [];
          group.name = groupName;
          arr[groupName] = group;
          arr.push(group);
        }
        arr[groupName].push(child);
        return arr;
      }, []);

  let clickedHash = decodeURIComponent(location.hash.slice(1));
  const hashRatio = {};
  const initScrollPos = (id) => {
    if (id === clickedHash) {
      document.querySelector(`#${clickedHash}`)?.scrollIntoView?.({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
      });
    }
  };

  const hash = () => {
    let ret = clickedHash;
    let lastRatio = 0;
    let lastHash = null;
    Object.keys(hashRatio).find((key) => {
      if (hashRatio[key] > lastRatio) {
        lastRatio = hashRatio[key];
        lastHash = key;
      }
      if (lastRatio >= 1) return true;
    });
    if (lastRatio > (hashRatio[clickedHash] || 0)) ret = lastHash;
    return ret;
  };

  return (
    <>
      <aside className="fixed left-0 bottom-0 top-16 w-64 overflow-x-hidden overflow-y-auto text-sm break-words hidden sm:block">
        {filterdChildren().map((group) => (
          <nav key={group.name}>
            <ol className="py-4 pl-4">
              <li className="py-2">
                <span className="text-base">{group.name}</span>
              </li>
              {group.map((child) => (
                <li key={`#${child.key}`} className="py-1">
                  <a
                    href={`#${child.key}`}
                    on-click={() => {
                      clickedHash = child.key;
                    }}
                    className={`border-l pl-4 transition-all ${
                      child.key === hash()
                        ? 'text-sky-500 border-sky-500'
                        : 'border-slate-50/30 hover:text-sky-500'
                    }`}
                  >
                    {child.key}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ))}
      </aside>
      <main className="pl-6 sm:pl-72 pt-6 pb-6 pr-6 lg:pr-60 break-words">
        {filterdChildren().map((group) => (
          <section key={group.name} className={`mb-16 ${noBg() ? 'text-base' : 'text-sm'}`}>
            <h1 className="sticky sm:static pb-8 border-b border-stone-50/30 bg-slate-900 sm:bg-transparent z-10 top-16 left-0 font-bold text-3xl">
              {group.name}
            </h1>
            {group.map((child) => (
              <section
                className={`my-8 relative ${
                  noBg() ? 'text-slate-300' : 'bg-stone-50/30 p-4 rounded-lg'
                }`}
                key={child.key}
                on-intersection={({ detail: { value } }) => {
                  hashRatio[child.key] = value;
                }}
              >
                <span
                  id={child.key}
                  className="absolute -top-16"
                  on-mounted={() => {
                    initScrollPos(child.key);
                  }}
                />
                {child}
              </section>
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
