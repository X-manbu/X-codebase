import Vue from "vue";
import ElementUI from "element-ui";
import VueAMap from "vue-amap";
import "element-ui/lib/theme-chalk/index.css";
import qs from "qs";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import coordtransform from "coordtransform";

Vue.use(ElementUI);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: "your amap key",
    plugin: [
        "AMap.Autocomplete",
        "AMap.PlaceSearch",
        "AMap.Scale",
        "AMap.OverView",
        "AMap.ToolBar",
        "AMap.MapType",
        "AMap.PolyEditor",
        "AMap.CircleEditor",
    ],
    // 默认高德 sdk 版本为 1.4.4
    v: "1.4.4",
});

Vue.prototype.$qs = qs;
Vue.prototype.coordtransform = coordtransform;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
