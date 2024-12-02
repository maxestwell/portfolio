import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import textNodeStyler from './plugins/textNodeStyler'
// import hoverEffectPlugin from './plugins/hoverEffectPlugin'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(textNodeStyler)
// app.use(hoverEffectPlugin)

app.mount('#app')
