<template>
  <header class="nt-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'NtHeader',

  props: {
    height: {
      type: String,
      default: 0
    }
  }
};
</script>