<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import { useCustomers } from '@/composables/useCustomers'
import type { ICustomer } from '@/interface/ICustomer'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const { addCustomer } = useCustomers()
const router = useRouter()

const customer = reactive<ICustomer>({
  nombre: '',
  correo: '',
  telefono: '',
  direccion: '',
})

const add = async (customer: ICustomer) => {
  //logic to add customer
  try {
    await addCustomer(customer)
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cliente agregado correctamente',
      showConfirmButton: false,
      timer: 1700,
    })
    router.push({ name: 'costumers-list' })
  } catch (error) {
    console.log(error)
    await Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error',
      text: 'No se pudo agregar el cliente. Intenta de nuevo.',
      showConfirmButton: false,
      timer: 1700,
    })
  }
}

onMounted(async () => {
  // await addCustomer(customer);
})
</script>

<template>
  <form-component v-model="customer" :is-edit="false" @send-data="add"></form-component>
</template>

<style scoped></style>
