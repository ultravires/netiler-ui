<template>
  <div id="app">
    <!-- 按钮组件 -->
    <nt-button
      type="success"
      circle
      @click="handleBtnClick('success')">
      成功
    </nt-button>
    <nt-button
      type="danger"
      @click="handleBtnClick('error')">
      错误
    </nt-button>
    <nt-button
      type="warning"
      @click="handleBtnClick('warning')">
      警告
    </nt-button>
    <nt-button
      type="info"
      @click="handleBtnClick('info')">
      信息
    </nt-button>

    <!-- 盒子组件 -->
    <nt-box
      class="container"
      title="演习资料"
      more="更多》"
      @more-click="handleMoreClick">
      <!-- 列表组件 - 事件代理模式 -->
      <nt-list :order="false" start="5" @item-click="handleListItemClick">
        <nt-list-item v-for="item in 10" :key="item">
          该列表组件支持事件代理模式，可优化代码速度该列表组件支持事件代理模式，可优化代码速度
        </nt-list-item>
      </nt-list>
    </nt-box>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.component('VList', {
  props: {
    order: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const tag = this.order ? 'ol' : 'ul';
    return h(tag, this.$slots.default);
  }
});

export default {
  name: 'App',

  methods: {
    handleBtnClick(type) {
      const direction = 'right';
      const offset = 100;
      const str = {
        success: '成功',
        error: '错误',
        warning: '警告',
        info: '信息'
      };
      this.$message({
        message: `这是一条${str[type]}提示！`,
        type,
        direction,
        offset
      });
    },
    handleMoreClick() {
      alert('more-click');
    },
    handleListItemClick(index) {
      alert(index);
    }
  }
};
</script>

<style scoped>
.container {
  width: 400px;
}


/* ===================== */
.nt-box {
  background-color: rgba(0, 163, 255, .75);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAAaklEQVRIDWP8////ZgYoYIIxQDQKh5EMZTgNI0oCxUaidKA4mEY6cLoK2T5kNk5HIStCZg8HDaOhhByjuNjDIaZp7weS0xKu4MYlTrIXcBmES3zUAlwhAxcfDSJ4UOBijAYRrpCBi9M8iACzrRokmF9omgAAAABJRU5ErkJggg==);
  border-radius: 6px;
  border: 1px solid #fff;
  overflow: hidden;
}

.nt-box >>> .nt-box__header {
  padding: 0 10px;
  background-image: linear-gradient(90deg,#509ce4,#8fc2e8);
}

.nt-box >>> .nt-box__content {
  padding: 10px;
}

.nt-list {
  margin: 0;
  padding: 0;
}

.nt-list >>> .nt-list__item {
  list-style: none;
  padding: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
