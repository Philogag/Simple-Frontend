import type { App } from "vue";
import Menu from "./components/Menu.vue";

const components = {
    Menu: Menu,
}

export function loadComponents(app: App) {
    for (var key in components) {
        app.component(key, components[key]);
    }
}