import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import DaftarNamaPresiden from '../components/DaftarNamaPresiden.vue';
import TodoList from '../components/TodoList.vue';
import Penduduk from '../components/Penduduk.vue';
import Lambang from '../components/Lambang.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/daftarnamapresiden', component: DaftarNamaPresiden },
  { path: '/todolist', component: TodoList },
  { path: '/penduduk', component: Penduduk },
  { path: '/lambang', component: Lambang},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;