import List from './src/list.js';

List.install = function(Vue) {
  Vue.component(List.name, List);
}

export default List;
