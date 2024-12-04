import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TextNodeStyler from './plugins/TextNodeStyler'
import HeadingWrapper from './plugins/HeadingWrapper'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(TextNodeStyler)
app.use(HeadingWrapper)

app.mount('#app')
