<script setup lang="ts">
import { type ICustomer } from '@/interface/ICustomer'
// import { ref, type Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    isEdit: boolean
  }>(),
  {
    title: 'Agregar',
  },
)

const model = defineModel<ICustomer>({ required: true })

//aqui se definen los eventos que se envian al padre
const emit = defineEmits<{
  (e: 'send-data', customer: ICustomer): void
  (e: 'add-customer', customer: ICustomer): void
}>()

//esta funcion hace el envio de los datos
const sendCustomer = (e: unknown) => {
  console.log(e)
  console.log(model.value)
  emit('send-data', model.value)
}

// const editCustomer = () => {
//   emit('send-data', model.value)
// }

// //esta funcion agrega un cliente al listado
// const addCustomer = () => {
//   emit ('add-customer', model.value); //model.value es el cliente que se envia al padre
// }
</script>

<template>
  <div class="bg-gray-50 min-h-screen p-6">
    <div class="max-w-lg mx-auto">
      <!-- Simple Header -->
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-800">
          {{ props.isEdit ? 'Editar Cliente' : 'Nuevo Cliente' }}
        </h2>
        <p class="text-gray-600 mt-1">
          {{
            props.isEdit ? 'Actualiza la información del cliente' : 'Completa los datos del cliente'
          }}
        </p>
      </div>

      <!-- formulario-->
      <form @submit.prevent="sendCustomer" class="bg-white rounded-lg border border-gray-200 p-6">
        <!-- campo Nombre -->
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo
          </label>
          <input
            v-model="model.nombre"
            type="text"
            id="nombre"
            name="nombre"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa el nombre completo"
            required
          />
        </div>

        <!-- campo Correo -->
        <div class="mb-4">
          <label for="correo" class="block text-sm font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input
            v-model="model.correo"
            type="email"
            id="correo"
            name="correo"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <!-- campos Teléfono y Dirección juntos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              v-model="model.telefono"
              type="tel"
              id="telefono"
              name="telefono"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+52 55 1234 5678"
              required
            />
          </div>

          <div>
            <label for="direccion" class="block text-sm font-medium text-gray-700 mb-2">
              Dirección
            </label>
            <input
              v-model="model.direccion"
              type="text"
              id="direccion"
              name="direccion"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Calle, Ciudad, Estado"
              required
            />
          </div>
        </div>

        <!-- Botones -->
        <div class="flex space-x-3 pt-4">
          <button
            type="submit"
            class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            {{ props.isEdit ? 'Actualizar Cliente' : 'Crear Cliente' }} <!--Si no esta editando, crea un cliente-->
          </button>
          <router-link
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
            :to="{ name: 'costumers-list' }"
            >Cancelar</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
