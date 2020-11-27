import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* eslint-disable*/
// Vue.config.productionTip = false

let instance = null;
function render(props) {
  const { container } = props;
  instance = new Vue({ 
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app'); // 这里是挂载到自己的html中 基座会拿到这个挂载后的html 将其注入进去  
}


// webpack打包公共文件路径
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}else{
	// 独立运行
  new Vue({ 
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
// 自组件的协议
export async function bootstrap() {
  console.log(11222222222);
}

export async function mount(props) {
  console.log(12333333333333);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  console.log(12444444444)
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}
