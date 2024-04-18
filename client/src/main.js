import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import DataView from 'primevue/dataview';
import  Tag  from "primevue/tag";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import Checkbox from 'primevue/checkbox';
import Avatar from 'primevue/avatar';
import ConfirmPopup from 'primevue/confirmpopup';
import Paginator from 'primevue/paginator';
import Rating from 'primevue/rating';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ScrollTop from 'primevue/scrolltop';
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)
app.component('PrimeButton', Button);
app.component('ScrollTop', ScrollTop);
app.component('DataView', DataView);
app.component('PrimeTag', Tag);
app.component('PrimeInputText', InputText);
app.component('PrimeCheckbox', Checkbox);
app.component('PrimeToast', Toast);
app.component('PrimeMessage', Message);
app.component('PrimeDialog', Dialog);
app.component('PrimeAvatar', Avatar);
app.component('PrimeTooltip', Tooltip);
app.component('ConfirmPopup', ConfirmPopup);
app.component('PrimePaginator', Paginator);
app.component('PrimeRating', Rating);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('InputText', InputText);


app.use(VueAxios, { $request: axios })
app.use(ToastService)
app.use(PrimeVue)
app.use(VueSweetalert2);
app.use(router)
app.mount('#app')
