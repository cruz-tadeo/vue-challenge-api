<script setup lang="ts">

import { computed, type Ref, ref } from 'vue'
import IconTrash from '@/components/IconTrash.vue'

const tasks = ref(['Hola',"hola"]);

const filterItems = computed(() => tasks.value);

const search:Ref<string> = ref('');


const addItem = () => {
  console.log('agregando');
};

const removeItem = () => {
  console.log('eliminando');
};

</script>

<template>
  <div class="container mx-auto my-20">
    <div class="my-10">
        <input
          v-model="search"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12">
      <div>
        <h1 class="text-2xl font-bold mb-4">Tareas</h1>
        <ul class="list-disc pl-5 space-y-2">
          <li class="bg-red-500 grid grid-cols-1 md:grid-cols-2 gap-8" v-for="(task, index) in filterItems" :key="index">
            <p>{{ index + 1 }}.- {{ task }}</p>
            <p class="w-10 h-10"><icon-trash class="w-10 h-10 hover:cursor-pointer" @delete="removeItem"></icon-trash></p>
          </li>
        </ul>
      </div>
      <div>
        <form @submit.prevent="addItem" class="space-y-4">
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto
                 px-5 py-2.5"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
