<script setup lang="ts">
import { useCustomers } from '@/composables/useCustomers';
import { onMounted, ref, type Ref } from 'vue'
import type { ICustomer } from '@/interface/ICustomer.ts'
import { useRoute } from 'vue-router'

const { customers, fetchCustomers, formatearFecha } = useCustomers();

const customer:Ref<ICustomer | undefined> = ref<ICustomer>();
const route = useRoute();

const { id } = route.params;

onMounted(async() => {
  await fetchCustomers()
  customer.value = customers.value.find((item:ICustomer) => item.id == +id); 

})
</script>

<template>
  <div class="text-center font-mono ">
    <div class="text-2xl">
      <h1 >Datos del usuario</h1>
    </div>
    <div v-if="customer">
      <p > Nombre: {{ customer?.nombre  }}</p>
      <p>Correo: {{ customer?.correo }}</p>
      <p>Telefono: {{ customer?.telefono }}</p>
      <p>Direccion: {{ customer?.direccion }}</p>
      <p>Creado en: {{formatearFecha(customer.creadoEn ?? '')}}</p>
      <p>Actualizado en: {{formatearFecha(customer.actualizadoEn ?? '')}}</p>
      </div>
    <div v-else>
      <p>No existe informacion del usuario</p>
    </div>
  </div>
</template>
