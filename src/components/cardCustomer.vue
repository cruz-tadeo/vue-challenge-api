<template>
  <div class="w-72 rounded-2xl shadow-lg bg-[#f2ebeb] shadow-sky-200 p-4  mb-5 ml-4 ">
    <div class="flex flex-col">
      <h5 class="text-xl text-center font-semibold mb-1">
        {{ props.customer.nombre }}
      </h5>

      <nav class="place-items-end flex flex-col mt-3">
        <RouterLink
          class="inline-block rounded-md border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white hover:bg-indigo-700"
          to="/"
          >Ver detalles</RouterLink
        >
      </nav>
    </div>
  </div>

</template>

<script lang="ts" setup>
import type { ICustomer } from '@/interfaces/ICustomer'
const props = defineProps<{
  customer : ICustomer
}>()
</script>

<style scoped></style>
