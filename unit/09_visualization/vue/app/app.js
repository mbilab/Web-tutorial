import './index.pug'
import 'semantic-ui-css/semantic.css'
import './app.sass'

import Vue from 'vue'
import App from './app.vue'


new Vue({
 el: '#app',
 render: h => h(App),
})
