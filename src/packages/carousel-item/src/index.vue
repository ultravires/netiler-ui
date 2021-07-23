<template>
  <div
    class="nt-carousel__item"
    :class="{ 'is-actived': isActived }"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NtCarouselItem',

  data() {
    return {
      isActived: false,
      translate: 0,
      direction: 'horizontal'
    };
  },

  computed: {
    styles() {
      const styles = {};
      if (this.direction === 'vertical') {
        styles['transform'] = `translateY(${this.translate}px)`;
      } else {
        styles['transform'] = `translateX(${this.translate}px)`;
      }
      return styles;
    }
  },

  methods: {
    calcTranslate(index, activedIndex) {
      const el = this.$el;
      this.direction = this.$parent.$props.direction;
      if (this.direction === 'vertical') {
        const offsetHeight = el.offsetHeight;
        this.translate = -((activedIndex - index) * offsetHeight);
      } else {
        const offsetWidth = el.offsetWidth;
        this.translate = -((activedIndex - index) * offsetWidth);
      }
    },

    transformItem(index, activedIndex, oldIdx) {
      this.calcTranslate(index, activedIndex);
      this.isActived = index === activedIndex;
    }
  }
};
</script>
