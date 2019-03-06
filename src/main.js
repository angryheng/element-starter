import Vue from 'vue'
import ElementUI from 'element-ui' // 完整引入
// import {Button, Select} from 'element-ui' // 部分引入需要的
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
// Vue.use(ElementUI, {size : 'small', zIndex : 3000}); 在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

/* 或者写成这样
Vue.use(Button)
Vue.use(Select)
*/

new Vue({
  el: '#app',
  render: h => h(App) // render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来，这是vue2.0的写法，h => h(App)是es6语法，即为: function(h){return h(App)}。
})
