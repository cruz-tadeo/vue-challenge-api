import { ref, type Ref } from 'vue';
import type { ICustomer } from '@/interfaces/ICustomer';
import { format } from 'date-fns'

export function formatearFecha(fechaIso: string): string {
  const fecha = new Date(fechaIso);
  // const formateador = new Intl.DateTimeFormat('es-ES', {
  //   day: '2-digit',
  //   month: 'long',
  //   year: 'numeric',
  // });
  return format(fecha, 'yyyy-MM-dd hh:mm:ss');

  //return formateador.format(fecha);
}

export function useCustomers() {
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
    } finally {
      loading.value = false;
    }
  };




  const fetchCustomer = async (id:number): Promise<unknown> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`http://localhost:3001/customers/${id}`);

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const json = await response.json();
      return json;
    } catch (err: unknown) {
      error.value = (err as Error).message;
      console.error('Error al obtener customers:', err);
    } finally {
      loading.value = false;
    }

  }

  return {
    customers,
    loading,
    error,
    fetchCustomers,
    fetchCustomer,
    formatearFecha
  };
}
