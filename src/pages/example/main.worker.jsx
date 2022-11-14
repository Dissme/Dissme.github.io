import { render, MethodChannel } from '@easythings/easy-view/jsx-runtime';
import { components, Layout } from '../../components/main/Layout';

const APIs = require.context('@/pages/example', false, /.mdx$/);
const weights = ['获取帮助', '基础', '开始'];
const entries = APIs.keys()
  .map((path) => ({
    id: path.match(/\.\/(.*)\.mdx$/)[1],
    Component: APIs(path)['default'],
    group: APIs(path)['group'] ?? '建设中',
    weight: weights.indexOf(APIs(path)['group']),
  }))
  .sort((a, b) => b.weight - a.weight || a.id.charCodeAt() - b.id.charCodeAt());

const channel = new MethodChannel();

function Main() {
  return (
    <Layout noBg channel={channel}>
      {entries.map((doc) => (
        <doc.Component key={doc.id} group={doc.group} components={components} />
      ))}
    </Layout>
  );
}

const listen = render(<Main />);
listen(self);
channel.connect(self);
