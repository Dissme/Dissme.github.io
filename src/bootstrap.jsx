import '@/assets/theme.css';
import '@/assets/base.scss';
import '@/utils/router';
import { use, mount, onLoadMicro } from '@easythings/easy-view';
import { MethodChannel } from '@easythings/easy-view/jsx-runtime';
import { createBg, createWorker, customEvents } from '@/utils';
import { routes } from '@/utils/routes';
import { methods } from '@/utils/constants';
import { Route, Switch } from '@/components/main/router';
import { Fof } from '@/components/common/404';
import { MicroComponent } from '@easythings/easy-view/jsx-runtime';
import { url as menuUrl } from '@/components/worker/Menu.worker';

use(customEvents);
createBg();

const channel = new MethodChannel();
let menuWorker;
onLoadMicro((props) => {
  const { url, id } = props;
  if (url !== menuUrl) return createWorker(url, id);
  if (menuWorker) return menuWorker;
  menuWorker = new Worker(url);
  channel.connect(menuWorker);
  return menuWorker;
});

let lastPage = '';

mount(<MicroComponent url={menuUrl} />, document.querySelector('#menu'));
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
      <Route key={route.path} path={route.path} component={route.component} />
    ))}
  </Switch>,
  document.querySelector('#app'),
);
