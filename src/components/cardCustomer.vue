<script lang="ts" setup>
import type { ICustomer } from '@/interface/ICustomer'
import Swal from 'sweetalert2';



const props = defineProps<{
  customer: ICustomer
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'update', customer: ICustomer): void
  (e: 'add', customer: ICustomer): void
}>()

const deleteCustomerId = async (id: number | undefined) => {
  if (id === undefined) return //undefined porque solo se elimina si hay un id valido

  const result = await Swal.fire({
    title: "¿Estás seguro de eliminar este cliente?",
    text: "¡Esta acción no se puede deshacer!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  })
  if (result.isConfirmed) {
    emit('delete', id)

    await Swal.fire({
      title: "Cliente eliminado",
      text: "El cliente ha sido eliminado exitosamente",
      icon: "success",
    })
  }

}

</script>

<template>
  <div class="w-80 rounded-2xl shadow-lg bg-[#ffffff] shadow-gray-400 p-4 ">
    <div class="flex flex-col ">
      <h5 class="text-xl text-center font-semibold mb-1">
        {{ props.customer.nombre }}
      </h5>

      <nav class="flex flex-row items-center gap-2 mt-4 ">
        <RouterLink
          class="text-gray-700 bg-blue-200 border border-blue-300 focus:outline-none hover:bg-gray-100 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
          :to="{ name: 'user-data', params: { id: props.customer.id } }"
          >Ver detalles</RouterLink
        >

        <router-link
          class="focus:outline-none text-gray-700 bg-green-300 border border-green-400 hover:bg-gray-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          :to="{ name: 'update-user', params: { id: props.customer.id } }"
          >Editar</router-link
        >
        <button
        @click="deleteCustomerId(props.customer.id)"
        class="focus:outline-none text-gray-700 bg-red-200 border border-red-300 hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        eliminar
      </button>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
