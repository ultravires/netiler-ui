<template>
  <button class="nt-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'NtButton',

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>
