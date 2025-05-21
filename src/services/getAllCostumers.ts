import type { Ref, ref } from "vue";

export function getCostumers(){
  const customers: Ref<ICustomer[]> = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchCustomers = async (): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('http://localhost:3001/customers');

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const json = await response.json();
      customers.value = json;
    } catch (err: unknown) {
      error.value = (err as Error).message;
      console.error('Error al obtener customers:', err);
}
  export interface Iuser {
    id: number,
    nombre: string,
    correo: string;
    telefono: string;
    direccion: string;
    creado_en: string;
    actualizado_en: string;
  }

  export async function fetchUsers(): Promise<Iuser[]> {
  const response = await fetch('http://localhost:3001/customers');
  if (!response.ok) {
    throw new Error('Error al obtener los usuarios')
  }
  return await response.json()
}
