import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import Task1 from '@/views/Task1.vue';
import Task2 from '@/views/Task2.vue';
import Task3 from '@/views/Task3.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/task1',
    name: 'task1',
    component: Task1
  },
  {
    path: '/task2',
    name: 'task2',
    component: Task2
  },
  {
    path: '/task3',
    name: 'task3',
    component: Task3
  },
  
]

const router = createRouter({
  history: createWebHistory('/vue3_task/'),
  routes
})

export default router
