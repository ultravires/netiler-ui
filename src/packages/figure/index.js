import Figure from './src/index.vue';

Figure.install = function (Vue) {
  Vue.component(Figure.name, Figure);
}

export default Figure;
