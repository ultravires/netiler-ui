<template>
  <div class="nt-box">
    <slot name="header">
      <header class="nt-box__header">
          <h3>
            <i></i>
            {{ title }}
          </h3>
          <span v-if="more" @click="handleMoreClick">{{ more }}</span>
      </header>
    </slot>
    <div class="nt-box__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NtBox',

  props: {
    title: {
      type: String,
      default: ''
    },
    more: {
      type: String,
      default: '更多》'
    }
  },

  methods: {
    handleMoreClick() {
      this.$emit('more-click');
    }
  }
};
</script>
