<template>
  <div id="app">
    <div class="container">
      <!-- 按钮组件 -->
      <nt-button
        type="success"
        icon="nt-icon nt-icon-success"
        @click="handleBtnClick('success')">
        成功
      </nt-button>
      <nt-button
        type="danger"
        icon="nt-icon nt-icon-error"
        @click="handleBtnClick('error')">
        错误
      </nt-button>
      <nt-button
        type="warning"
        icon="nt-icon nt-icon-warning"
        @click="handleBtnClick('warning')">
        警告
      </nt-button>
      <nt-button
        type="info"
        icon="nt-icon nt-icon-info"
        @click="handleBtnClick('info')">
        信息
      </nt-button>
      <nt-button
        round
        icon="nt-icon nt-icon-info"
      >
        圆角
      </nt-button>
      <nt-button
        circle
        icon="nt-icon nt-icon-info"
      >
      </nt-button>
    </div>

    <div class="container">
      <!-- 盒子组件 -->
      <nt-box
        class="box-container"
        title="最新推荐"
        more="更多》"
        @more-click="handleMoreClick">
        <!-- 列表组件 - 事件代理模式 -->
        <nt-list :order="false" start="5" @item-click="handleListItemClick">
          <nt-list-item v-for="item in 10" :key="item">
            该列表组件支持事件代理模式，可优化代码速度;该列表组件支持事件代理模式，可优化代码速度
          </nt-list-item>
        </nt-list>
      </nt-box>
    </div>

    <div class="container">
      <!-- 画像组件 -->
      <nt-figure
        src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        alt="画像"
        img-width="auto"
        img-height="90px"
        caption="新建文档文本.txt"
        align="center"
      >
      </nt-figure>
    </div>
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

<style>
body {
  padding: 20px;
}

.container {
  margin: 10px;
}
</style>

<style scoped>
.box-container {
  width: 400px;
}

/* ===================== */

.nt-button + .nt-button {
  margin-left: 6px;
}

.nt-box {
  border: 1px solid #000;
}

.nt-list >>> .nt-list__item {
  padding: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
