<template>
  <aside class="nt-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'NtAside',

  props: {
    width: {
      type: String,
      default: '0'
    }
  }
};
</script>
