import '@/assets/theme.css';
import '@/assets/base.scss';
import './utils/router';
import { use, mount, MethodChannel, mountFromPort } from '@easythings/easy-view';
import { customEvents } from './utils';
import { routes } from './utils/routes';
import { methods } from './utils/constants';
import { Route, Switch } from './components/main/router';
import { Fof } from './components/common/404';
const port = new Worker(new URL('@/components/worker/Menu', import.meta.url));

use(customEvents);

const channel = new MethodChannel();
channel.connect(port);

let lastPage = '';

mountFromPort(port, document.querySelector('#menu'));
mount(
  <Switch
    fallback={<Fof />}
    on-matched={({ detail }) => {
      if (lastPage === detail[0]) return;
      lastPage = detail[0];
      channel.postMessage(methods.setPathName, lastPage);
      scrollTo({ top: 0 });
    }}
  >
    {routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} lazy />
    ))}
  </Switch>,
  document.querySelector('#app'),
);
