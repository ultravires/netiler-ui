<template>
  <div
    class="nt-carousel__item"
    :class="{
      'is-actived': isActived,
      'is-animating': isAnimating
    }"
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
      isAnimating: false,
      isActived: false,
      translate: 0
    };
  },

  computed: {
    direction() {
      return this.$parent.direction;
    },
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
    processIndex(index, activedIndex, length) {
      if (activedIndex === 0 && index === length - 1) {
        // 当前激活的是第一张，则需将最后一张移动至第一张前
        index = -1;
      } else if (activedIndex === length - 1 && index === 0) {
        // 当前激活的是最后一张，则需将第一张移动至最后一张后
        index = length;
      }
      return index;
    },

    calcTranslate(index, activedIndex) {
      const el = this.$el;
      if (this.direction === 'vertical') {
        const offsetHeight = el.offsetHeight;
        this.translate = -((activedIndex - index) * offsetHeight);
      } else {
        const offsetWidth = el.offsetWidth;
        this.translate = -((activedIndex - index) * offsetWidth);
      }
    },

    transformItem(index, activedIndex, oldIdx) {
      const length = this.$parent.items.length;
      const isLoop = this.$parent.loop;
      // 仅即将进入和即将离开的两个 DOM 元素需要动画
      this.isAnimating = (index === activedIndex) || (index === oldIdx);
      if (index !== activedIndex && length > 2 && isLoop) {
        index = this.processIndex(index, activedIndex, length);
      }
      this.calcTranslate(index, activedIndex);
      this.isActived = index === activedIndex;
    }
  }
};
</script>
