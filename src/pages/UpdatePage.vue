<script setup lang="ts">

import FormComponent from '@/components/FormComponent.vue'
import { useCustomers } from '@/composables/useCustomers';
import type { ICustomer } from '@/interface/ICustomer';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const {fetchCustomer} = useCustomers();
const route = useRoute();

const { id } = route.params;

const customer:Ref<ICustomer> = ref({
  nombre: '',
  correo: '',
  telefono: '',
  direccion: ''
});

const editCustomer = (customer:ICustomer) => {
  // Logic to edit customer
  console.log(customer, 'edited');
}

onMounted(async() => {
  customer.value = await fetchCustomer(+id) ?? customer.value;
})
</script>

<template>
<form-component v-model="customer" title="Editar" @send-data="editCustomer"></form-component>
</template>

<style scoped>

</style>
