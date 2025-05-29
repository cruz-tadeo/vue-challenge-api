<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import type { ICustomer } from '@/interface/ICustomer';
import { reactive } from 'vue';

const customer = reactive<ICustomer>({
  nombre: '',
  correo: '',
  telefono: '',
  direccion: ''
});

const addCustomer = (customer:ICustomer) => {
  // Logic to add customer
   console.log(customer, 'added');
  customer.value.push(customer);

}
</script>

<template>
  <form-component v-model="customer" @send-data="addCustomer"></form-component>
</template>

<style scoped>

</style>
