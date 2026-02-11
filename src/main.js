import { createApp } from "vue";
import App from "./App";
import components from '@/components/UI';

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component)
})

// Cтворено екземпляр застосунку і вмонтовано в div id='app'
app.mount("#app");
