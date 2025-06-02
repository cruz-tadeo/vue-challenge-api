<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import { useCustomers } from '@/composables/useCustomers';
import type { ICustomer } from '@/interface/ICustomer';
import router from '@/routes';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const {fetchCustomer, editCustomer} = useCustomers(); //se agrega el comsposable de editCustomer
const route = useRoute();

const { id } = route.params;

const customer:Ref<ICustomer> = ref({
  id: +id, //se agrega el id para que los cambios en el cliente se reflejen
  nombre: '',
  correo: '',
  telefono: '',
  direccion: ''
});

const updateCustomer = async (customer:ICustomer) => {
  // Logic to edit customer
  console.log(customer, 'cliente actualizado');
  await editCustomer(customer);
  router.push({name: 'costumers-list'});
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
