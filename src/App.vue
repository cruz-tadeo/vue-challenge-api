<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import IconTrash from '@/components/IconTrash.vue'
import IconEdit from '@/components/IconEdit.vue'

const tasks: Ref<string[]> = ref(['Hola', 'hola'])

const filterItems = computed(() =>
  tasks.value.filter((task) => task.toLowerCase().includes(search.value.toLowerCase())),
)
//words.filter((word) => word.length > 6)
const search: Ref<string> = ref('')

const task: Ref<string> = ref('')

const indexTask = ref(0)

const addItem = (text: string) => {
  tasks.value.push(text)
  task.value = ''
}

const isEdit: Ref<boolean> = ref(false)
const selectItem = (position: number) => {
  isEdit.value = true
  task.value = tasks.value.find((element, index) => index == position) ?? ''
  indexTask.value = position
  console.log(position)
}

// const editItem = (text:string) =>{
//   tasks.value = tasks.value.filter((task,index) => index == text)

//   console.log('actualizar')
//  }

const editItem = (position: number, text: string) => {
  tasks.value[position] = text
  task.value = ''
  isEdit.value = false
}

const removeItem = (position: number) => {
  tasks.value = tasks.value.filter((task, index) => index != position)

  console.log('eliminando', position)
}
</script>

<template>
  <div class="container mx-auto my-20">
    <div class="my-10">
      <input
        v-model="search"
        type="text"
        class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12">
      <div>
        <h1 class="text-2xl font-bold mb-4">Tareas</h1>
        <table class="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-slate-700 text-white">
              <th class="border border-gray-300 px-4 py-2">N°</th>
              <th class="border border-gray-300 px-4 py-2">Tarea</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in filterItems" :key="index" class="hover:bg-gray-100">
              <td class="border border-gray-300 px-4 py-2 text-center">{{ index + 1 }}</td>
              <td class="border border-gray-300 px-4 ">{{ task }}

                <div class="flex justify-center space-x-4">
                  <icon-trash
                    class="w-6 h-6 hover:cursor-pointer"
                    @click="removeItem(index)"
                  ></icon-trash>
                  <icon-edit
                    class="w-6 h-6  hover:cursor-pointer"
                    @click="selectItem(index)"
                  ></icon-edit>
                </div>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <form @submit.prevent="!isEdit ? addItem(task) : editItem(indexTask, task)" class="space-y-4">
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          v-model="task"
        />

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
        >
          {{ isEdit ? 'Edit' : 'Add' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
