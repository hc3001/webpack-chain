import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

module.exports = {
    chainWebpack: config => {
        console.log('config', config.plugin('html'))
        config.plugin('html')
            .tap(args => {
                args[0].title = "my-test"
                return args
            })
    },
}
