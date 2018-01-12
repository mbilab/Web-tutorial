import '!file-loader?name=vue.html!extract-loader!html-loader!pug-html-loader!./vue.pug'

import Vue from 'vue'
import App from './vue.vue'

new Vue({
 el: '#app',
 render: h => h(App),
})
