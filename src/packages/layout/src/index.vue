<template>
  <div class="nt-layout" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NtLayout',

  props: {
    type: {
      type: String,
      default: '',
      validator: (val) => (['flex', 'grid'].includes(val))
    },
    gap: {
      type: [Array, Number],
      default: ''
    },
    justify: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    }
  },

  computed: {
    classes() {
      return `nt-layout--${this.type}`;
    },
    styles() {
      const styles = {};
      let rowGap = 0;
      let colGap = 0;
      if (Array.isArray(this.gap)) {
        [rowGap, colGap = 0] = this.gap;
      } else {
        rowGap = colGap = this.gap;
      }
      styles['row-gap'] = rowGap + 'px';
      styles['column-gap'] = colGap + 'px';
      if (this.justify) {
        this.type === 'flex'
          ? styles['justify-content'] = this.justify
          : styles['justify-items'] = this.justify;
      }
      if (this.align) {
        this.type === 'flex'
          ? styles['align-items'] = this.align
          : styles['align-content'] = this.align;
      }
      return styles;
    }
  }
};
</script>