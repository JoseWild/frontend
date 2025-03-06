import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/js/all'

import store from './store'

createApp(App).use(store)
    .use(router)
    .mount('#app')
