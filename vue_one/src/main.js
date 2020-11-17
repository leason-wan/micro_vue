import Vue from "vue";
import App from "./App.vue";
import { micro } from './micro_render';

Vue.config.productionTip = false;

const { createApp, lifeCycle } = micro(Vue);

createApp({
  el: '#app',
  render: h => h(App)
});

export const { bootstrap, mount, unmount } = lifeCycle;
