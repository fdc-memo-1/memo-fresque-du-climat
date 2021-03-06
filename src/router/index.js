import { createRouter, createWebHistory } from 'vue-router';
import AllCards from '@/views/AllCards.vue';
import CardDetails from '@/views/CardDetails.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'RouteHome',
    component: AllCards
  },
  {
    path: '/cartes/:cardNum',
    name: 'RouteCardDetails',
    props: true,
    component: CardDetails
  },
  {
    path: '/a-propos',
    name: 'RouteAbout',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
