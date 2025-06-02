<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import { useCustomers } from '@/composables/useCustomers';
import type { ICustomer } from '@/interface/ICustomer';
import router from '@/routes';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2'

const {fetchCustomer, editCustomer} = useCustomers(); //se agrega el composable de editCustomer
const route = useRoute();

const { id } = route.params;

const customer:Ref<ICustomer> = ref({
  nombre: '',
  correo: '',
  telefono: '',
  direccion: ''
});

const updateCustomer = async (customer:ICustomer) => {
  // Logic to edit customer
  try {
    await editCustomer(customer);
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cliente actualizado correctamente',
      showConfirmButton: false,
      timer: 1700,
    })
    console.log(customer, 'cliente actualizado');
    router.push({name: 'costumers-list'});

  } catch (error) {
    console.log(error)
    await Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error',
      text: 'No se pudo actualizar el cliente. Intenta de nuevo.',
      showConfirmButton: false,
      timer: 1700,
    })
  }


}

onMounted(async() => {
  customer.value = await fetchCustomer(+id) ?? customer.value; //(+id) convierte el id a numero
})
</script>

<template>
<form-component v-model="customer" title="Editar" :is-edit="true" @send-data="updateCustomer"></form-component>
</template>

<style scoped>

</style>
