import { App, createApp } from "vue";
import mainApp from "./App.vue";

const app: App<Element> = createApp(mainApp);

app.mount("#app");
