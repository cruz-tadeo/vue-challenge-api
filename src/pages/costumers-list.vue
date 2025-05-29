<script lang="ts" setup>
import CardCustomer from '@/components/cardCustomer.vue'
import { useCustomers } from '@/composables/useCustomers'
import type { ICustomer } from '@/interface/ICustomer'
import { onMounted } from 'vue'

const { customers, fetchCustomers, deleteCustomerId } = useCustomers()

onMounted(async () => {
  await fetchCustomers()

  console.log(customers.value);
})

const deleteCustomer  = async (id: number) => {
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
  <h1 class="text-3xl font-semibold text-center mt-2 mb-12">Lista de Clientes</h1>

  <router-link class="p-3 bg-blue-500 text-white rounded-lg mx-10" :to="{ name: 'create-user' }"
    >Crear</router-link
  >

  <div class="flex gap-8 justify-center">
    <CardCustomer
      v-for="customer in customers"
      :key="customer.id"
      :customer="customer"
      @delete="deleteCustomer"
      @update="updateCustomer"
    />
  </div>
</template>
