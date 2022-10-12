import { components, Layout } from '../../components/main/Layout';

const APIs = require.context('@/pages/example', false, /.mdx$/);
const entries = APIs.keys()
  .map((path) => ({
    id: path.match(/\.\/(.*)\.mdx$/)[1],
    Component: APIs(path)['default'],
    group: APIs(path)['group'] ?? '建设中',
  }))
  .sort((a, b) => a.group.charCodeAt() - b.group.charCodeAt());

export default function Main() {
  return (
    <Layout noBg>
      {entries.map((doc) => (
        <doc.Component key={doc.id} group={doc.group} components={components} />
      ))}
    </Layout>
  );
}
