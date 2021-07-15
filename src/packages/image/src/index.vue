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
import { isString, isHtmlElement } from '@/utils/types';
import { getScrollContainer } from '@/utils/dom';

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
      this.$emit('error', event);
    },

    handleLoad() {
      this.isLoading = false;
      this.isError = false;
    },

    loadImage() {
      this.$el.firstChild.src = this.src;
    },

    addLazyLoadListener() {
      let scrollContainer = this.scrollContainer;
      let _scrollContainer = null;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (isString(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = getScrollContainer(this.$el);
      }

      if (_scrollContainer) {
        this._scrollContainer = _scrollContainer;
        if (typeof IntersectionObserver === 'undefined') {
          console.warn('[lazyLoad] 当前浏览器版本不支持 `IntersectionObserver`.');
          return;
        };
        const image = this.$el.firstChild;
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const src = entry.target.dataset.src;
              entry.target.src = src;
              observer.unobserve(entry.target);
            }
          })
        }, {
          root: _scrollContainer,
          rootMargin: '0px 0px 0px 0px',
          threshold: [0]
        });

        intersectionObserver.observe(image);
      }
    }
  }
};
</script>