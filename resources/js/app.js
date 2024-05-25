import "./bootstrap";
import { createApp } from "vue";

import AppComponent from "./App.vue";
import router from './routes.js';
import { createMetaManager, plugin as metaPlugin } from 'vue-meta';


const app = createApp(AppComponent);
const metaManager = createMetaManager();
app.use(metaManager);


app.use(router);
app.mount("#app");