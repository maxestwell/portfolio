import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TextNodeStylerPlugin from './plugins/TextNodeStyler'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(TextNodeStylerPlugin)

app.mount('#app')
