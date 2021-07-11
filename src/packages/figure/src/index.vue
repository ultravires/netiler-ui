<template>
  <figure class="nt-figure">
    <img
      :src="src"
      class="nt-figure__img"
      :width="imgWidth"
      :height="imgHeight"
      :alt="alt"
    >
    <figcaption
      class="nt-figure__caption"
      :class="`nt-figure__caption--${align}`"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'NtFigure',

  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    imgWidth: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left',
      validator: (val) => (['left', 'center', 'right'].includes(val))
    }
  }
};
</script>
