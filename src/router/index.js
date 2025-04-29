import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HeroView.vue'),
    },
    {
      path: '/our-coffee',
      name: 'Our coffee',
      component: () => import('@/views/OurCoffeeView.vue'),
    },
    {
      path: '/contacts',
      name: 'Contact us',
      component: () => import('@/views/ContactsView.vue'),
    },
    {
      path: '/goodspage',
      name: 'For you pleasure',
      component: () => import('@/views/ForYouPleasureView.vue'),
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: () => import('@/views/ThanksView.vue'),
    },
    {
      path: '/our-coffee/item',
      name: 'Our coffee ',
      component: () => import('@/views/GoodsItemView.vue'),
    },
  ],
});
export default router;
