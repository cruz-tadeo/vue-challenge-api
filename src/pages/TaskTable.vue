<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import Swal, { type SweetAlertIcon } from 'sweetalert2'
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
  alert('Agregado correctamente','La tarea se ha guardado correctamente','success','https://media.tenor.com/ouQzDmgC9CwAAAAj/miku-vocaloid.gif')
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
  alert('Editado','La tarea se ha editado correctamente','warning','https://media.tenor.com/KFFx4_AtN24AAAAj/pain-in-his-dih.gif')
  isEdit.value = false
}

const removeItem = (position: number) => {
  tasks.value = tasks.value.filter((task, index) => index != position)
  alert('Eliminado','La tarea se ha eliminado','success','https://media.tenor.com/2FL76f6q7u8AAAAj/explosion.gif')
  console.log('eliminando', position)
}

const alert =(title:string,text:string,icon:SweetAlertIcon  ='success',gif:string) =>{
  Swal.fire({
  title: title,
  text: text,
  icon: icon,
  backdrop: `rgba(0,0,123,0.4)
            url(${gif})
            left top
            no-repeat`

  //   `rgba(0,0,123,0.4)
  //   url("/images/nyan-cat.gif")
  //   left top
  //   no-repeat`
});
}



</script>

<template>
  <div class="container mx-auto my-10">
    <nav>
      <RouterLink
        class="inline-block rounded-md border border-transparent bg-[#6bbbb0] px-3 py-1.5 text-center font-medium text-white hover:bg-[#568f87] ml-40"
        to="/"
        >Inicio</RouterLink
      >

    </nav>
    <div class="my-10 flex justify-center">
      <div class="basis-128">
        <input
          placeholder="Buscar Tareas"
          v-model="search"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
    </div>
    <div class="max-w-[1200px] mx-auto">
      <div class="table-auto">
        <h1 class="text-2xl font-bold mb-4">Tareas</h1>
        <table class="table-auto w-full border-collapse border border-gray-300" >
          <thead>
            <tr class="bg-slate-700 text-white">
              <th class="border border-gray-300 px-4 py-2">N°</th>
              <th class="border border-gray-300 px-4 py-2">Tarea</th>
              <th class="border border-gray-300 px-4 py-2"></th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in filterItems" :key="index" class="hover:bg-gray-100">
              <td class="border border-gray-300 px-4 py-2 text-center font-semibold">{{ index + 1 }}</td>
              <td class="border border-gray-300 px-4 text-center">{{ task }}</td>
              <td class="border border-gray-300 px-4 py-2 flex justify-center">
                  <icon-trash
                    class="w-6 h-6 hover:cursor-pointer"
                    @click="removeItem(index)"
                  ></icon-trash>
                  <icon-edit
                    class="w-6 h-6  hover:cursor-pointer"
                    @click="selectItem(index)"
                  ></icon-edit>

              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="my-10 flex justify-center">
      <div class="basis-128">
      <form @submit.prevent="!isEdit ? addItem(task) : editItem(indexTask, task)" class="space-y-4">

        <input
        placeholder="Añadir Tareas"
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
  </div>
</template>

<style scoped></style>
