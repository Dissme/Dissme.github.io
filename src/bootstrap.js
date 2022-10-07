import '@/assets/base.scss';
import { mountFromPort, MethodChannel, use } from '@easythings/easy-view';
import { customEvents } from './utils';
// import { MicroComponent } from '@easythings/easy-view/jsx-runtime';
import { methods } from './utils/constants';

use(customEvents);

const port = new Worker(new URL('@/components/worker/Menu', import.meta.url));

const channel = new MethodChannel();
channel.register(methods.getPathName, () => location.pathname);
channel.connect(port);

mountFromPort(port, document.querySelector('#menu'));
// mount(<MicroComponent port={port} />, document.querySelector('#menu'));
