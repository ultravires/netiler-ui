import Box from './packages/box/index.js';
import Button from './packages/button/index.js';
import Figure from './packages/figure/index.js';
import Image from './packages/image/index.js';
import ListItem from './packages/list-item/index.js';
import List from './packages/list/index.js';
import Message from './packages/message/index.js';

const components = [
  Box,
  Button,
  Figure,
  Image,
  ListItem,
  List,
  Message
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Box,
  Button,
  Figure,
  Image,
  ListItem,
  List,
  Message
}

