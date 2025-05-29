<script lang="ts" setup>
import type { ICustomer } from '@/interface/ICustomer'
const props = defineProps<{
  customer: ICustomer
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'update', customer: ICustomer): void
  (e: 'add', customer: ICustomer): void

}>()

//  const addCustomer = (customer:ICustomer) => {
//   customer.value.push(customer);
//    emit('add', customer);

//  }

const deleteCustomerId = async(id: number | undefined) => {
  if(id){
    emit('delete', id)
  }
}



</script>

<template>
  <div class="w-72 rounded-2xl shadow-lg bg-[#f2ebeb] shadow-sky-200 p-4 mb-5 ml-4">
    <div class="flex flex-col">
      <h5 class="text-xl text-center font-semibold mb-1">
        {{ props.customer.nombre }}
      </h5>

      <nav class="place-items-end flex flex-col mt-3">
        <RouterLink
          class="inline-block rounded-md border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white hover:bg-indigo-700"
          :to="{ name: 'user-data', params: { id: props.customer.id } }"
          >Ver detalles</RouterLink
        >
        <!-- --Redireccion a Editar-- -->
        <router-link
          class="inline-block rounded-md border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white hover:bg-indigo-800"
           :to="{ name: 'update-user', params: { id: props.customer.id } }"
          >Editar</router-link
        >
      </nav>

      <button
        @click="deleteCustomerId(props.customer.id)"
        class="inline-block rounded-md border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white hover:bg-indigo-700"
      >
        eliminar
      </button>
    </div>
  </div>
</template>

<style scoped></style>
