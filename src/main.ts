import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { loadComponents } from "./loadComponents";

const app = createApp(App)
    
app.mount("#app");

loadComponents(app);