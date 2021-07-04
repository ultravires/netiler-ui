export default {
  name: 'NtList',

  props: {
    order: {
      type: Boolean,
      default: false
    },
    start: {
      type: [String, Number],
      default: 1
    }
  },

  render(h) {
    const tag = this.order ? 'ol' : 'ul';
    const start = this.order ? this.start + '' : null;
    return h(tag, {
      class: 'nt-list',
      attrs: {
        start
      },
      on: {
        click: (event) => {
          const target = event.target || event.srcElement;
          const currentTarget = event.currentTarget || document;
          if (target.tagName.toUpperCase() === 'LI') {
            const list = currentTarget.querySelectorAll('li');
            const index = Array.prototype.indexOf.call(list, target);
            this.$emit('item-click', index);
          }
        }
      }
    }, this.$slots.default);
  }
};
