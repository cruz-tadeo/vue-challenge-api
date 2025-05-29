<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import { useCustomers } from '@/composables/useCustomers';
import type { ICustomer } from '@/interface/ICustomer';
import { onMounted, reactive } from 'vue';

const {addCustomer} = useCustomers();

const customer = reactive<ICustomer>({
  nombre: '',
  correo: '',
  telefono: '',
  direccion: ''
});

const addCustomer = (customer:ICustomer) => {
  // Logic to add customer
   console.log(customer, 'added');
}

onMounted(async()=>{
  await addCustomer(customer);
})
</script>

<template>
  <form-component v-model="customer" @send-data="addCustomer"></form-component>
</template>

<style scoped>

</style>
