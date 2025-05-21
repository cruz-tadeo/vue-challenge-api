<script setup lang="ts">
import { useCustomers } from '@/composables/useCustomers';
import { onMounted } from 'vue';

const { customers, loading, error, fetchCustomers } = useCustomers();

onMounted(async() => {
  await fetchCustomers()
  console.log(`the component is now mounted.`)
})
</script>

<template>
  <div class="text-center font-mono ">
    <div class="text-2xl">
      <h1 >Datos del usuario</h1>
    </div>
    <div v-for="customer in customers" :key="customer.id">
      <p > Nombre: {{ customer.nombre  }}</p>
      <p>Correo: {{ customer.correo }}</p>
      <p>Telefono: {{ customer.telefono }}</p>
      <p>Direccion: {{ customer.direccion }}</p>
      <p>Creado en: {{ customer.creadoEn }}</p>
      <p>Actualizado en: {{ customer.actualizadoEn }}</p>
      </div>
  </div>
</template>
