import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Setup fontawesome
import "./utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("fa-icon", FontAwesomeIcon).mount("#app");
