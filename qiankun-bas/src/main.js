import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import {registerMicroApps, start, initGlobalState} from 'qiankun';

const state = {name: 'zhuzhu'}
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('主应用变化后的状态',state, prev);
  store.commit('changeUser', state.name)
});
actions.setGlobalState({name: 'xiaoming'});

Vue.prototype.$actions = actions;
// actions.offGlobalStateChange();

// setInterval(() => {
//   console.log(new Date())
//   actions.setGlobalState({name: new Date()});
// }, 4000);
// console.log(store.state.user);
const apps = [
  {
    name: 'vue app',
    entry: '//localhost:11000', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）
    // fetch,
    container: "#vue", // 挂在到vue上
    activeRule: "/vue", // 激活的路径
    props: { // 主组件传输数据给子组件
      user: store.state.user
    }
  },
  {
    name: 'vue2 app',
    entry: '//localhost:21000', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）
    // fetch,
    container: "#vue2", // 挂在到vue上
    activeRule: "/vue2" // 激活的路径
  }
];

const lifeCircle =  {
  beforeLoad: [
      app => {
          console.log(11111111111, "load", app);
      }
  ], // 挂载前回调
  beforeMount: [
      app => {
          console.log(22222222222, "mount", app);
      }
  ], // 挂载后回调
  afterUnmount: [
      app => {
          console.log(33333333333, "unload", app);
      }
  ] // 卸载后回调
};
registerMicroApps(apps, lifeCircle); // 注册
// setDefaultMountApp("/")
start({
  prefetch: '/vue',
  sandbox: true,
}); // 开启

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
