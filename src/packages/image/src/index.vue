<template>
  <div class="nt-image" :style="{ width, height }">
    <img
      :class="['nt-image__inner', { 'is-lazy': lazy }]"
      :data-src="src"
      :alt="alt"
      :style="`object-fit:${fit}`"
      @load="handleLoad"
      @error="handleError"
    />
    <template v-if="isLoading">
      <slot name="placeholder">
        <div class="nt-image__placeholder">
          {{ placeholder }}
        </div>
      </slot>
    </template>
    <template v-if="isError">
      <slot name="error">
        <div class="nt-image__error">
          {{ error }}
        </div>
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NtImage',

  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    fit: {
      type: String,
      default: 'contain'
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    lazy: {
      type: Boolean,
      default: false
    },
    scrollContainer: null
  },

  data() {
    return {
      isError: false,
      isLoading: true,
      placeholder: '图片正在加载...',
      error: '图片加载失败'
    }
  },

  mounted() {
    if (this.lazy) {
      this.addLazyLoadListener();
    } else {
      this.loadImage();
    }
  },

  methods: {
    handleError(event) {
      let target = event.currentTarget;
      let parent = target.parentNode;
      parent.removeChild(target);
      target = null;
      parent = null;
      this.isLoading = false;
      this.isError = true;
    },

    handleLoad() {
      this.isLoading = false;
    },

    loadImage() {
      this.$el.firstChild.src = this.src;
    },

    addLazyLoadListener() {
      // TODO 懒加载实现
    }
  }
};
</script>