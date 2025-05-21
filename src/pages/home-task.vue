<template>
  <div class="relative overflow-hidden bg-white">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Bienvenido a tu Admin
          </h1>
        </div>
        <div>
          <div class="mt-10"></div>

          <nav>
            <RouterLink
              class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              to="/task-table"
              >Ir a tareas</RouterLink
            >
            <RouterLink
              class="inline-block rounded-md border border-transparent bg-red-400 px-8 py-3 text-center font-medium text-white hover:bg-red-700 ml-3"
              to="/costumers-list"
              >Ir a clientes
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
