import { defineCustomElement } from 'vue';
import { createPinia, setActivePinia } from 'pinia';

import App from './App.ce.vue';
import AppIcon from '@/components/AppIcon.ce.vue';
import AppWindow from '@/components/AppWindow.ce.vue';

setActivePinia(createPinia());

customElements.define('mf-chat-bot', defineCustomElement(App));
customElements.define('app-icon', defineCustomElement(AppIcon));
customElements.define('app-window', defineCustomElement(AppWindow));




















// https://www.thisdot.co/blog/building-web-components-with-vue-3-2
//import { defineCustomElement } from 'vue';
// import { createPinia } from "pinia";
// import { createApp } from 'vue'
// // import ChatBot from '@/components/customElements/ChatBot.vue';

// import App from './App.vue';
// import AppIcon from '@/components/AppIcon.vue';
// import AppWindow from '@/components/AppWindow.vue';
// import './style.css'
// // import AppIcon from '@/components/AppIcon.ce.vue';
// // import AppWindow from '@/components/AppWindow.ce.vue';
// //const app = createApp(App);

// const app = createApp({
//   data() {
//     return {
//       count: 0
//     }
//   }
// });

// const pinia = createPinia();
// app.use(pinia);
// app.component('App', App);
// app.mount('#app');




// https://www.thisdot.co/blog/building-web-components-with-vue-3-2
// import './style.css'
// import { createApp } from 'vue'
// import ChatBot from '@/components/customElements/ChatBot.vue';
// const app = createApp(App);

// app.use(pinia);
// app.component('ChatBot', ChatBot);
// app.mount('#app');
// https://github.com/vuejs/pinia/discussions/1085
