<template>
  <div class="nt-carousel__item" :class="{ 'is-actived': isActived }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NtCarouselItem',

  data() {
    return {
      isActived: false,
      translate: 0
    };
  },

  methods: {
    transformItem(index, activedIndex, oldIdx) {
      const item = this.$el;
      item.style['transform'] = `translateX(${-activedIndex * 100}%)`;
      this.isActived = index === activedIndex;
    }
  }
};
</script>
