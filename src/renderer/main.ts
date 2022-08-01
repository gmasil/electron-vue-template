import { App, createApp } from "vue";
import mainApp from "./App.vue";
import router from "./router";

const app: App<Element> = createApp(mainApp).use(router);

app.mount("#app");
