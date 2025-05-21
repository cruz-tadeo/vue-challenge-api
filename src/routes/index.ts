import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import TaskTable from '@/pages/Task-table.vue'
import HomeTask from '@/pages/home-task.vue'
import costumersList from '@/pages/costumers-list.vue'
import CreatePage from '@/pages/CreatePage.vue'
import UpdatePage from '@/pages/UpdatePage.vue'
import UserData from '@/pages/userData.vue'

//definicion de rutas
const routes: Array<RouteRecordRaw> = [
  {path: '/', name: 'Inicio', component: HomeTask},
  {path: '/task-table',name: 'Tabla de Tareas', component: TaskTable},
  {path: '/costumers-list',name: 'Lista de Clientes', component: costumersList},
  {path: '/user-data/:id',name: 'user-data', component: UserData},
  {path: '/add-user',name: 'create-user', component: CreatePage},
  {path: '/update-user/:id',name: 'update-user', component: UpdatePage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

// RouteRecordRaw es la interfaz de TypeScript
// que asegura que tus rutas tengan la estructura correcta.
