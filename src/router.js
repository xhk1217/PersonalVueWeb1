import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from './App.vue';
import MyApp1 from './MyApp1.vue';
import MyApp2 from './MyApp2.vue';
import MyApp3 from './MyApp3.vue';
import MyApp4 from './MyApp4.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MyApp1 },
  { path: '/index', component: MyApp1 },
  { path: '/blog', component: MyApp2 },
  { path: '/login', component: MyApp3 },
  { path: '/message', component: MyApp4 },
  // 其他路由配置
];

const router = new VueRouter({
  routes
});

export default router;
