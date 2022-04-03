import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// <-- for vee-validate 
import {
    Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// -->

import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

import $pushToastMessage from '@/methods/pushToastMessage';

import App from "./App.vue";
import router from "./router";

// <-- for vee-validate 
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
});
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');
// -->


const app = createApp(App);
app.config.globalProperties.$pushToastMessage = $pushToastMessage;

app.use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount("#app");
