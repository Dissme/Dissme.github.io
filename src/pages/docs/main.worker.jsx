import { render, MethodChannel } from '@easythings/easy-view/jsx-runtime';
import { components, Layout } from '../../components/main/Layout';

const APIs = import.meta.webpackContext('@/pages/docs', {
  recursive: false,
  regExp: /\.mdx$/,
});

const entries = APIs.keys()
  .map((path) => ({
    id: path.match(/\.\/(.*)\.mdx$/)[1],
    Component: APIs(path)['default'],
    group: APIs(path)['group'] ?? '建设中',
  }))
  .sort(
    (a, b) => a.group.charCodeAt() - b.group.charCodeAt() || b.id.charCodeAt() - a.id.charCodeAt(),
  );

const channel = new MethodChannel();

function Main() {
  return (
    <Layout channel={channel}>
      {entries.map((doc) => (
        <doc.Component key={doc.id} group={doc.group} components={components} />
      ))}
    </Layout>
  );
}
const listen = render(<Main />);
channel.connect(self);
listen(self);
