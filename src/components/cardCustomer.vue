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
  <div class="w-72 rounded-2xl shadow-lg bg-[#ffffff] shadow-gray-400 p-4">
    <div class="flex flex-col">
      <h5 class="text-xl text-center font-semibold mb-1">
        {{ props.customer.nombre }}
      </h5>

      <nav class="place-items-end flex flex-col mt-3 ">
        <RouterLink
          class="inline-block rounded-md mb-2 border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white hover:bg-indigo-700"
          :to="{ name: 'user-data', params: { id: props.customer.id } }"
          >Ver detalles</RouterLink
        >

        <router-link
          class="inline-block rounded-md border border-transparent bg-indigo-600 px-1 py-1 text-sm font-medium text-white hover:bg-indigo-800"
          :to="{ name: 'update-user', params: { id: props.customer.id } }"
          >Editar</router-link
        >
      </nav>

      <button
        @click="deleteCustomerId(props.customer.id)"
        class="inline-block rounded-md border mt-2 border-transparent bg-red-600 px-1 py-1 text-sm font-medium text-white hover:bg-red-700"
      >
        eliminar
      </button>
    </div>
  </div>
</template>

<style scoped></style>
