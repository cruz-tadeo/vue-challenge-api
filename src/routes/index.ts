import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import TaskTable from '@/pages/Task-table.vue'
import HomeTask from '@/pages/home-task.vue'

//definicion de rutas
const routes: Array<RouteRecordRaw> = [
  {path: '/', name: 'Inicio', component: HomeTask},
  {path: '/task-table',name: 'Tabla de Tareas', component: TaskTable},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

// RouteRecordRaw es la interfaz de TypeScript
// que asegura que tus rutas tengan la estructura correcta.
