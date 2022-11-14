import { MicroComponent } from '@easythings/easy-view/jsx-runtime';
import { url } from './main.worker';

export default function Example(props) {
  return <MicroComponent {...props} id="Example" url={url} />;
}
