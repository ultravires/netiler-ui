import CarouselItem from './src/index.vue';

CarouselItem.install = function (Vue) {
  Vue.component(CarouselItem.name, CarouselItem);
};

export default CarouselItem;
