import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import CategorySelect from '@/components/CategorySelect'
Vue.component(CategorySelect.name, CategorySelect)
    /**
     * If you don't want to use mock-server
     * you want to use MockJs for mock api
     * you can execute: mockXHR()
     *
     * Currently MockJs will be used in the production environment,
     * please remove it before going online ! ! !
     */
if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock')
    mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
    // 如果想要中文版 element-ui，按如下方式声明
    // Vue.use(ElementUI)
    //引入相关API请求接口
import API from '@/api';
//组件实例的原型的原型指向的是Vue.prototype
//任意组件可以使用API相关的接口
Vue.prototype.$API = API;
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})