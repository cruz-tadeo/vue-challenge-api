<template>
  <nav class="text-gray-700 text-lg mt-4 ml-4 font-medium" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li>
        <RouterLink to="/" class="text-sky-600 hover:underline">Home</RouterLink>
      </li>
      <li>
        <span class="mx-1 text-gray-400">›</span>
      </li>
      <li>
        <RouterLink to="/costumers-list" class="text-gray-500 hover:text-blue-600 hover:underline">
          Lista de Clientes
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>
