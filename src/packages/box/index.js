import Box from './src/index.vue';

Box.install = function (Vue) {
  Vue.component(Box.name, Box);
};

export default Box;
