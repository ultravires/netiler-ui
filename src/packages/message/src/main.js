import Vue from 'vue';
import MessageComponent from './index.vue';

const MessageConstructor = Vue.extend(MessageComponent);

let instance = null;
let instances = [];
let seed = 1;

const Message = function(opts) {
  opts = opts || {};
  // this.$message('消息提示') => this.$message({ message: '消息提示' })
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }
  let id = `nt-message_${seed++}`;
  const userOnClose = opts.onClose;
  opts.onClose = function() {
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data() {
      return opts;
    }
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  let offsetPosition = opts.offset || 20;
  instances.forEach(item => {
    offsetPosition += item.$el.offsetHeight + 16;
  });
  instance.offsetPosition = offsetPosition;
  instance.visible = true;
  instances.push(instance);
  return instance;
}

// this.$message.success()，this.$message.warning() ...
const types = ['success', 'warning', 'error', 'info'];
types.forEach((type) => {
  Message[type] = (opts) => {
    if (typeof opts === 'string') {
      opts = {
        message: opts
      };
    }
    opts.type = type;
    return Message(opts);
  };
});

Message.close = function(id, userOnClose) {
  let removedHeight = 0;
  let dom = null;
  let length = instances.length;
  // 前一个移除时，后面全部要跟随移动
  for (let i = 1; i < length; ++i) {
    removedHeight = instances[i - 1].$el.offsetHeight;
    dom = instances[i].$el;
    dom.style.top = (parseInt(dom.style.top, 10) - removedHeight - 16) + 'px';
  }
  if (typeof userOnClose === 'function') {
    userOnClose(instances[0]);
  }
  instances.shift();
};

export default Message;
