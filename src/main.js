import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TextNodeStyler from './plugins/TextNodeStyler'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(TextNodeStyler)

app.mount('#app')
