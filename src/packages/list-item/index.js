import ListItem from './src/index.vue';

ListItem.install = function(Vue) {
  Vue.component(ListItem.name, ListItem);
}

export default ListItem;
