<script lang="ts" setup>
import CardCustomer from '@/components/cardCustomer.vue'
import { useCustomers } from '@/composables/useCustomers'
import type { ICustomer } from '@/interface/ICustomer'
import { onMounted } from 'vue'

const { customers, fetchCustomers, deleteCustomerId } = useCustomers()

onMounted(async () => {
  await fetchCustomers()

  console.log(customers.value)
})

const deleteCustomer = async (id: number) => {
  console.log(id, 'deleted')
  customers.value = customers.value.filter((item: ICustomer) => item.id != id)
  await deleteCustomerId(id)
}

const updateCustomer = (customer: ICustomer) => {
  console.log(customer.id, 'updated')
}

// const handleAddCustomer = (customer: ICustomer) => {
//   console.log(customer.id, 'added')
//   customers.value.push(customer)
// }
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100">
    <h1 class="text-3xl font-semibold text-center mt-2 mb-4">Lista de Clientes</h1>
    <div class="mb-8 ml-2">
      <router-link
        class="p-3 text-white bg-[#75a3c3] hover:bg-[#50758e] rounded-lg mx-10"
        :to="{ name: 'create-user' }"
        >Agregar Cliente</router-link
      >
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-10">
      <CardCustomer
        v-for="customer in customers"
        :key="customer.id"
        :customer="customer"
        @delete="deleteCustomer"
        @update="updateCustomer"
      />
    </div>
  </div>
</template>
