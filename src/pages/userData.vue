<script setup lang="ts">
import { useCustomers } from '@/composables/useCustomers';
import { onMounted, ref, type Ref } from 'vue'
import type { ICustomer } from '@/interface/ICustomer.ts'
import { useRoute } from 'vue-router'

const { fetchCustomer, formatearFecha } = useCustomers();

const customer:Ref<ICustomer | undefined> = ref<ICustomer>();
const route = useRoute();

const { id } = route.params;

// onMounted(async() => {
//   await fetchCustomers()
//   customer.value = customers.value.find((item:ICustomer) => item.id == +id);
//
// })

onMounted(async() => {
  customer.value = await fetchCustomer(+id);
  //customers.value.find((item:ICustomer) => item.id == +id);


})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8 mt-4">
        <div class="flex items-center justify-end ">
         <router-link
         class="text-white bg-[#50758e] hover:bg-[#75a3c3] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center  mb-2 "
         to="/costumers-list">
          Regresar</router-link>

        </div>
        <h1 class="text-3xl font-bold text-slate-800 mb-2">Datos del Usuario</h1>
        <p class="text-slate-600">Información detallada del perfil</p>
      </div>

      <!--  Card de la informacion -->
      <div v-if="customer" class="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <!-- Profile Header -->
        <div class=" p-6 text-center">
          <h2 class="text-2xl font-semibold text-black">{{ customer?.nombre }}</h2>
        </div>

        <!-- Information completa -->
        <div class="p-6 space-y-6">
          <div class="grid gap-4 md:grid-cols-2">
            <!-- Email -->
            <div class="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">

              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-slate-600">Correo Electrónico</p>
                <p class="text-slate-900 font-mono text-sm break-all">{{ customer?.correo }}</p>
              </div>
            </div>

            <!-- telefono -->
            <div class="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
              <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">

              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-slate-600">Teléfono</p>
                <p class="text-slate-900 font-mono text-sm">{{ customer?.telefono }}</p>
              </div>
            </div>
          </div>

          <!-- direccion -->
          <div class="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
            <div class="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">

            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-600">Dirección</p>
              <p class="text-slate-900">{{ customer?.direccion }}</p>
            </div>
          </div>

          <!-- Fecha de creacion -->
          <div class="border-t border-slate-200 pt-6">
            <h3 class="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Clock class="w-5 h-5 mr-2 text-slate-600" />
              Información de Registro
            </h3>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p class="text-sm font-medium text-emerald-700">Creado en</p>
                <p class="text-emerald-900 font-mono text-sm">{{ formatearFecha(customer.creadoEn ?? '') }}</p>
              </div>
              <div class="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p class="text-sm font-medium text-amber-700">Actualizado en</p>
                <p class="text-amber-900 font-mono text-sm">{{ formatearFecha(customer.actualizadoEn ?? '') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- mensaje de usuario no encontrado -->
      <div v-else class="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center">
        <h3 class="text-xl font-semibold text-slate-800 mb-2">Usuario no encontrado</h3>
      </div>
    </div>
  </div>
</template>
