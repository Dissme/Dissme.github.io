import { MicroComponent } from '@easythings/easy-view/jsx-runtime';
import { url } from './main.worker';

export default function Docs(props) {
  return <MicroComponent {...props} id="Docs" url={url} />;
}
