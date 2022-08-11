//引入vue
import Vue from 'vue'
//引入组件App
import App from './App.vue'
//关闭vue生产提示
Vue.config.productionTip = false
//vue实例化
new Vue({
    render: h => h(App)
}).$mount('#app')