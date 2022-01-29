import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
import "./resisterServiceWorker";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faCheckCircle,
  faPenSquare,
  faPlusCircle,
  faTrash,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

createApp(App).mount("#app");
