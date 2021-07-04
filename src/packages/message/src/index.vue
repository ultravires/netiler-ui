<template>
  <transition :name="`nt-message-slide-fade-${direction}`" @after-leave="handleAfterLeave">
    <div
      :class="[
        'nt-message',
        `nt-message--${type}`,
        `nt-message--${direction}`
      ]"
      :style="positionStyles"
      v-show="visible"
    >
    <i :class="typeClasses"></i>
    <slot><p>{{ message }}</p></slot>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

export default {
  name: 'NtMessage',

  data() {
    return {
      visible: false,
      closed: false,
      onClose: null,
      message: '',
      type: 'info',
      direction: 'top',
      duration: 3000,
      offsetPosition: 20
    }
  },

  computed: {
    typeClasses() {
      return this.type && `nt-message__icon nt-icon-${ typeMap[this.type] }`;
    },
    positionStyles() {
      return {
        top: `${this.offsetPosition}px`,
        right: `${this.direction.toLowerCase() === 'right' ? '20px' : null}`
      };
    }
  },

  watch: {
    closed(val) {
      if (val) {
        this.visible = false;
      }
    }
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      this.timer = setTimeout(() => {
        if (!this.onClosed) {
          this.close();
        }
      }, this.duration);
    }
  }
}
</script>