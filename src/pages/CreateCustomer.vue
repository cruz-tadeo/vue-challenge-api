<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import { useCustomers } from '@/composables/useCustomers';
import type { ICustomer } from '@/interface/ICustomer';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

const {addCustomer} = useCustomers();
const router = useRouter();

const customer = reactive<ICustomer>({
  nombre: '',
  correo: '',
  telefono: '',
  direccion: ''
});

const add = async(customer:ICustomer) => {
  // Logic to add customer
   console.log(customer, 'added');
  await addCustomer(customer);
  router.push({name: 'costumers-list'});

}

onMounted(async()=>{
  // await addCustomer(customer);
})
</script>

<template>
  <form-component v-model="customer" @send-data="add"></form-component>
</template>

<style scoped>

</style>
