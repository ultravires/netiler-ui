<template>
  <div id="app">
    <!-- 布局组件 -->
    <nt-layout type="flex" :gap="[0, 20]">
      <nt-aside width="300px">侧边栏</nt-aside>
      <nt-layout>
        <nt-header height="66px">
          头部
        </nt-header>
        <main>
          <section>
            <h2>轮播组件</h2>
            <nt-carousel
              class="nt-demo__carousel"
              height="320px"
              :default-index="2"
              :loop="true"
              controls="never"
              direction="horizontal"
              trigger="hover"
              type="card"
              @change="handleCarouselChange"
              @end="handleCarouselEnd"
            >
              <nt-carousel-item v-for="(image, index) in images" :key="index">
                <nt-image
                  :src="image"
                  width="100%"
                  height="100%"
                  fit="cover"
                  alt="图像"
                ></nt-image>
              </nt-carousel-item>
            </nt-carousel>
            <h2>按钮组件</h2>
            <div class="container">
              <!-- 按钮组件 -->
              <nt-button type="default">
                默认按钮
              </nt-button>
              <nt-button type="primary">
                主要按钮
              </nt-button>
              <nt-button
                type="success"
                icon="nt-icon nt-icon-success"
                @click="handleBtnClick('success')">
                成功
              </nt-button>
              <nt-button
                type="warning"
                icon="nt-icon nt-icon-warning"
                @click="handleBtnClick('warning')">
                警告
              </nt-button>
              <nt-button
                type="danger"
                icon="nt-icon nt-icon-error"
                @click="handleBtnClick('error')">
                危险
              </nt-button>
              <nt-button
                type="info"
                icon="nt-icon nt-icon-info"
                @click="handleBtnClick('info')">
                信息
              </nt-button>
            </div>
            <div class="container">
              <!-- 按钮组件 -->
              <nt-button plain type="default">
                朴素按钮
              </nt-button>
              <nt-button plain type="primary">
                主要按钮
              </nt-button>
              <nt-button
                plain
                type="success"
                icon="nt-icon nt-icon-success"
                @click="handleBtnClick('success')">
                成功
              </nt-button>
              <nt-button
                plain
                type="warning"
                icon="nt-icon nt-icon-warning"
                @click="handleBtnClick('warning')">
                警告
              </nt-button>
              <nt-button
                plain
                type="danger"
                icon="nt-icon nt-icon-error"
                @click="handleBtnClick('error')">
                危险
              </nt-button>
              <nt-button
                plain
                type="info"
                icon="nt-icon nt-icon-info"
                @click="handleBtnClick('info')">
                信息
              </nt-button>
            </div>
            <div class="container">
              <!-- 按钮组件 -->
              <nt-button ghost type="default">
                幽灵按钮
              </nt-button>
              <nt-button ghost type="primary">
                主要按钮
              </nt-button>
              <nt-button
                ghost
                type="success"
                icon="nt-icon nt-icon-success"
                @click="handleBtnClick('success')">
                成功
              </nt-button>
              <nt-button
                ghost
                type="warning"
                icon="nt-icon nt-icon-warning"
                @click="handleBtnClick('warning')">
                警告
              </nt-button>
              <nt-button
                ghost
                type="danger"
                icon="nt-icon nt-icon-error"
                @click="handleBtnClick('error')">
                危险
              </nt-button>
              <nt-button
                ghost
                type="info"
                icon="nt-icon nt-icon-info"
                @click="handleBtnClick('info')">
                信息
              </nt-button>
            </div>
            <div class="container">
              <!-- 按钮组件 -->
              <nt-button round type="default">
                圆角按钮
              </nt-button>
              <nt-button round type="primary">
                主要按钮
              </nt-button>
              <nt-button
                round
                type="success"
                icon="nt-icon nt-icon-success"
                @click="handleBtnClick('success')">
                成功
              </nt-button>
              <nt-button
                round
                type="warning"
                icon="nt-icon nt-icon-warning"
                @click="handleBtnClick('warning')">
                警告
              </nt-button>
              <nt-button
                round
                type="danger"
                icon="nt-icon nt-icon-error"
                @click="handleBtnClick('error')">
                危险
              </nt-button>
              <nt-button
                round
                type="info"
                icon="nt-icon nt-icon-info"
                @click="handleBtnClick('info')">
                信息
              </nt-button>
            </div>
            <div class="container">
              <!-- 按钮组件 -->
              <nt-button
                circle
                type="default"
                icon="nt-icon nt-icon-good"
              ></nt-button>
              <nt-button
                circle
                type="primary"
                icon="nt-icon nt-icon-good"
              ></nt-button>
              <nt-button
                circle
                type="success"
                icon="nt-icon nt-icon-good"
                @click="handleBtnClick('success')"
              ></nt-button>
              <nt-button
                circle
                type="warning"
                icon="nt-icon nt-icon-good"
                @click="handleBtnClick('warning')"
              ></nt-button>
              <nt-button
                circle
                type="danger"
                icon="nt-icon nt-icon-good"
                @click="handleBtnClick('error')"
              ></nt-button>
              <nt-button
                circle
                type="info"
                icon="nt-icon nt-icon-good"
                @click="handleBtnClick('info')"
              ></nt-button>
            </div>

            <h2>列表组件</h2>
            <div class="container">
              <!-- 盒子组件 -->
              <nt-box
                class="box-container"
                title="最新推荐"
                more="更多》"
                @more-click="handleMoreClick">
                <!-- 列表组件 - 事件代理模式 -->
                <nt-list :order="false" start="5" @item-click="handleListItemClick">
                  <nt-list-item v-for="item in 5" :key="item">
                    该列表组件支持事件代理模式，可优化代码速度;
                  </nt-list-item>
                </nt-list>
              </nt-box>
              <!-- 自定义头部 -->
              <nt-box
                class="box-container"
                @more-click="handleMoreClick">
                <header class="nt-box__header" slot="header">
                  <h3>自定义头部</h3>
                  <span>
                    <nt-button
                      circle
                      icon="nt-icon nt-icon-info"
                    >
                    </nt-button>
                  </span>
                </header>
                <!-- 列表组件 - 事件代理模式 -->
                <nt-list :order="false" start="5" @item-click="handleListItemClick">
                  <nt-list-item v-for="item in 5" :key="item">
                    该列表组件支持事件代理模式，可优化代码速度;
                  </nt-list-item>
                </nt-list>
              </nt-box>
            </div>

            <h2>图片组件</h2>
            <div class="container">
              <div class="imgs-box">
                <!-- 基础用法 -->
                <nt-image :src="BaiduImage" width="208px" height="130px" fit="fill"></nt-image>
                <!-- 正在加载 -->
                <nt-image src="http://p8.qhimg.com/bdm/480_296_0/t011b329f2e0b5232a8.jpg" width="208px" height="130px"></nt-image>
                <!-- 加载错误 -->
                <nt-image width="208px" height="130px"></nt-image>
                <!-- 自定义加载错误显示内容 -->
                <nt-image width="208px" height="130px">
                  <div class="nt-image__error" slot="error">
                    哎，图片加载失败了
                  </div>
                </nt-image>
                <div class="container">
                  <!-- 懒加载 -->
                  <nt-box class="box-container" title="图片懒加载" more="" style="height: 300px;">
                    <nt-image
                      :src="image"
                      lazy
                      width="208px"
                      height="130px"
                      v-for="(image, index) in images"
                      :key="index"
                    >
                      <div class="nt-image__placeholder" slot="placeholder">正在进行懒加载...</div>
                    </nt-image>
                  </nt-box>
                </div>
              </div>
            </div>

            <h2>画像组件</h2>
            <div class="container">
              <!-- 画像组件 -->
              <a
                href="https://www.baidu.com" 
                v-for="item in 4"
                :key="item"
              >
                <nt-figure
                  :src="BaiduImage"
                  alt="画像"
                  img-width="208px"
                  img-height="130px"
                  caption="百度"
                  align="center"
                >
                </nt-figure>
              </a>
            </div>

            <h2>树组件</h2>
            <div class="container">
              <nt-tree :data="treeData"></nt-tree>
            </div>
          </section>
        </main>
        <footer>底部</footer>
      </nt-layout>
    </nt-layout>
  </div>
</template>

<script>
import Vue from 'vue';
import BaiduImage from './assets/baidu.png';

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

  data() {
    return {
      BaiduImage,
      images: [
        'http://p0.qhimg.com/bdm/480_296_0/t01a75d0288dd00673a.jpg',
        'http://p1.qhimg.com/bdm/960_593_0/t01ab30fb7d486430a7.jpg',
        'http://p8.qhimg.com/bdm/480_296_0/t011b329f2e0b5232a8.jpg',
        'http://p4.qhimg.com/bdm/480_296_0/t012cde4a5058c156b7.jpg',
        'http://p4.qhimg.com/bdm/480_296_0/t01ea7e536d03740b30.jpg',
        'http://p7.qhimg.com/bdm/480_296_0/t013396c95cc389701e.jpg'
      ],
      treeData: [{
        label: '一级目录',
        children: [{
          label: '二级目录',
          children: [{
            label: '三级目录'
          }]
        }, {
          label: '一级目录'
        }]
      }]
    }
  },

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
    },
    handleCarouselChange(idx, oldIdx) {
    //   if (idx === oldIdx) {
    //     this.$message.warning('已经是最后一张了！');
    //   }
    },
    handleCarouselEnd(activedIndex) {
      this.$message.warning(`兄弟，你到头了啊！(${activedIndex})`);
    }
  }
};
</script>

<style>
body {
  --newtab-background-color: #F9F9FA;
  --newtab-border-primary-color: #B1B1B3;
  --newtab-border-secondary-color: #D7D7DB;
  --newtab-element-active-color: rgba(215,215,219,0.6);
  --newtab-element-hover-color: #EDEDF0;
  --newtab-icon-primary-color: rgba(12,12,13,0.8);
  --newtab-icon-secondary-color: rgba(12,12,13,0.6);
  --newtab-icon-tertiary-color: #D7D7DB;
  --newtab-inner-box-shadow-color: rgba(0,0,0,0.1);
  --newtab-inner-box-shadow-color-nte: rgba(9,32,77,0.12);
  --newtab-tile-shadow-secondary: rgba(29,17,51,0.2);
  --newtab-link-primary-color: #0060DF;
  --newtab-link-secondary-color: #008EA4;
  --newtab-text-conditional-color: #4A4A4F;
  --newtab-text-primary-color: #0C0C0D;
  --newtab-text-secondary-color: #737373;
  --newtab-textbox-background-color: #fff;
  --newtab-textbox-border: rgba(12,12,13,0.2);
  --newtab-textbox-focus-color: #0060DF;
  --newtab-textbox-focus-boxshadow: 0 0 0 1px #0060DF,0 0 0 4px rgba(0,96,223,0.3);
  --newtab-background-button-color: rgba(223,223,223,0.5);
  --newtab-background-button-text-color: #484848;
  --newtab-background-button-hover-color: rgba(196,196,196,0.5);
  --newtab-background-button-active-color: rgba(151,151,151,0.5);
  --newtab-button-primary-color: #0060DF;
  --newtab-button-secondary-color: inherit;
  --newtab-feed-button-background: #EDEDF0;
  --newtab-feed-button-text: #0C0C0D;
  --newtab-feed-button-background-faded: rgba(237,237,240,0.6);
  --newtab-feed-button-text-faded: rgba(12,12,13,0);
  --newtab-feed-button-spinner: #737373;
  --newtab-contextmenu-background-color: #F9F9FA;
  --newtab-contextmenu-button-color: #fff;
  --newtab-modal-color: #fff;
  --newtab-overlay-color: rgba(237,237,240,0.8);
  --newtab-section-header-text-color: #737373;
  --newtab-section-navigation-text-color: #737373;
  --newtab-section-active-contextmenu-color: #0C0C0D;
  --newtab-search-border-color: transparent;
  --newtab-search-dropdown-color: #fff;
  --newtab-search-dropdown-header-color: #F9F9FA;
  --newtab-search-header-background-color: rgba(249,249,250,0.95);
  --newtab-search-icon-color: rgba(12,12,13,0.4);
  --newtab-search-wordmark-color: #363959;
  --newtab-topsites-background-color: #fff;
  --newtab-topsites-icon-shadow: inset 0 0 0 1px var(--newtab-inner-box-shadow-color);
  --newtab-topsites-label-color: inherit;
  --newtab-topsites-outer-card-hover: rgba(0,0,0,0.05);
  --newtab-topsites-context-menu-hover: rgba(0,0,0,0.05);
  --newtab-card-active-outline-color: #D7D7DB;
  --newtab-card-background-color: #fff;
  --newtab-card-hairline-color: rgba(0,0,0,0.1);
  --newtab-card-placeholder-color: #D7D7DB;
  --newtab-card-shadow: 0 1px 4px 0 rgba(12,12,13,0.1);
  --newtab-snippets-background-color: #fff;
  --newtab-snippets-hairline-color: transparent;
  --newtab-background-primary-text-color: #151515;
  --newtab-focus-outline: rgba(0,96,223,0.25);
  --newtab-focus-border: #0060DF;
  --newtab-focus-border-selected: rgba(0,0,0,0.15);
  --newtab-seperator-line-color: #E1E0E6;
  --newtab-primary-action-background: #0060DF;
  --newtab-primary-action-background-off: #E9E9E9;
  --customize-menu-primary-text-color: #20123A;
  --customize-menu-check-fill: #fff;
  --customize-menu-background: #fff;
  --customize-menu-secondary-action-background: #F9F9FA;
  --customize-menu-secondary-action-background-hover: #EDEDF0;
  --customize-menu-secondary-action-background-active: #E2E2E6;
  --customize-menu-seperator-line-color: #E1E0E6;
  --customize-menu-first-shadow: rgba(9,32,77,0.12);
  --customize-menu-second-shadow: rgba(29,17,51,0.12);
  --customize-menu-primary-action-text: #fff;
  --customize-menu-line-color: #716F87;
  --newtab-search-first-shadow: rgba(9,32,77,0.12);
  --newtab-search-second-shadow: rgba(29,17,51,0.12);
  --newtab-search-text-color: #585165;
  --newtab-card-first-shadow: rgba(9,32,77,0.12);
  --newtab-card-second-shadow: rgba(29,17,51,0.12);
  --newtab-wordmark-color: #20123A;
}

body {
  padding: 20px;
}

.container {
  margin: 10px;
}

.t-align-center {
  text-align: center;
}
</style>

<style scoped>
/* Carousel - std */
.nt-demo__carousel {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
/* Carousel - end */


.box-container {
  margin: 0 10px;
  width: 360px;
}

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

.imgs-box .nt-image {
  margin: 0 10px;
  box-shadow: 0 3px 8px var(--newtab-inner-box-shadow-color-nte),
              0 0 2px var(--newtab-tile-shadow-secondary);
}

.nt-figure {
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
}

.nt-figure >>> img {
  background-color: #F9F9FA;
  border-radius: 8px;
  box-shadow: 0 3px 8px var(--newtab-inner-box-shadow-color-nte),
              0 0 2px var(--newtab-tile-shadow-secondary);
}

.nt-figure:hover {
  background-color: var(--newtab-topsites-outer-card-hover);
}
</style>
