import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/css/reset.css'
import './assets/css/default.css'

const app = createApp(App)
app.use(router)
// app.use(axios)
app.mount('#app')