<template>
 <h1 class="text-3xl font-semibold text-center mt-2 mb-12 ">Lista de Clientes</h1>
 <div
 class="flex"
  >
   <CardCustomer v-for="customer in customers" :key="customer.id" :customer="customer"/>

 </div>
 </template>

<script lang="ts" setup>
import CardCustomer from '@/components/cardCustomer.vue';
import { useCustomers } from '@/composables/useCustomers';
import { onMounted } from 'vue';

const { customers , fetchCustomers} = useCustomers();

onMounted(fetchCustomers);
</script>
