import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

//Mount function to start up the App:
const mount = (element) => {
    const app = createApp(Dashboard);
    app.mount(element);
};

//If we are in dev and isolation, call mount immediately:
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_dashboard-dev-root')
    if (devRoot) { 
        mount(devRoot) 
    }
}

//If we are running through Container, we should export mount function: 
export { mount };