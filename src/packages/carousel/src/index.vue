<template>
  <div class="nt-carousel" :class="carouselClasses">
    <!-- 左右控制器 -->
    <button
      class="nt-carousel__control nt-carousel__control--prev"
      @click="prev"
    >
      <i class="nt-icon nt-icon-arrow_left"></i>
    </button>
    <button
      class="nt-carousel__control nt-carousel__control--next"
      @click="next"
    >
      <i class="nt-icon nt-icon-arrow_right"></i>
    </button>
    <!-- 轮播容器 -->
    <div class="nt-carousel__container" :style="{ height }">
      <slot></slot>
    </div>
    <!-- 轮播指示器 -->
    <ul class="nt-carousel__indicators" v-if="isShowIndicators">
      <li
        class="nt-carousel__indicator"
        :class="{ 'is-actived': activedIndex === index }"
        v-for="(item, index) in items"
        :key="index"
        @mouseenter="handleIndicatorHover(index)"
        @click="handleIndicatorClick(index)"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NtCarousel',

  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].includes(val)
    },
    height: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'click',
      validator: (val) => ['hover', 'click'].includes(val)
    },
    type: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isShowIndicators: true,
      items: [],
      activedIndex: -1
    }
  },

  computed: {
    carouselClasses() {
      const classes = ['nt-carousel'];
      if (this.type) {
        classes.push(`nt-carousel--${this.type}`);
      }
      if (this.direction) {
        classes.push(`is-${this.direction}`);
      }
      return classes;
    },
    indicatorClasses() {
      const classes = ['nt-carousel__indicators'];
      if (this.type) {
        classes.push(`nt-carousel__indicators--${this.type}`);
      }
      return classes;
    }
  },

  watch: {
    items(val) {
      if (val.length <= 0) {
        this.isShowIndicators = false;
      } else {
        this.setActivedItem(this.defaultIndex);
      }
    },
    activedIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      if (oldVal > -1) {
        this.$emit('change', val, oldVal);
      }
    }
  },

  mounted() {
    this.updateItems();
  },

  methods: {
    resetItemPosition(oldIdx) {
      this.items.forEach((item, index) => {
        item.transformItem(index, this.activedIndex, oldIdx);
      });
    },

    setActivedItem(index) {
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Netiler Warn] - [Carousel] index must be an integer.');
        return;
      }
      const length = this.items.length;
      const oldIdx = this.activedIndex;
      if (index < 0) {
        this.activedIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activedIndex = this.loop ? 0 : length - 1;
      } else {
        this.activedIndex = index;
      }
      if (oldIdx === this.activedIndex) {
        this.resetItemPosition(oldIdx);
      }
    },

    prev() {
      this.setActivedItem(this.activedIndex - 1);
    },

    next() {
      this.setActivedItem(this.activedIndex + 1);
    },

    /**
     * 当到头之后再次点击左右控制器的触发事件（第一张或最后一张）
     */
    end(index) {
      alert(1);
      this.$emit('end', index);
    },

    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'NtCarouselItem');
    },

    handleIndicatorHover(index) {
      (this.trigger === 'hover') && (this.activedIndex = index);
    },

    handleIndicatorClick(index) {
      (this.trigger === 'click') && (this.activedIndex = index);
    }
  }
};
</script>