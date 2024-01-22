import { createApp, Vue } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueTheMask from 'vue-the-mask';

const app = createApp(App);

app.use(VueSweetalert2)
   .use(VueTheMask)
   .use(router)
   .mount('#app')

//createApp(App).use(router).mount('#app')

