import Aside from './src/index.vue';

Aside.install = function (Vue) {
  Vue.component(Aside.name, Aside);
};

export default Aside;
