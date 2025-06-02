import { ref, type Ref } from 'vue';
import { format } from 'date-fns'
import type { ICustomer } from '@/interface/ICustomer';

export function formatearFecha(fechaIso: string): string {
  const fecha = new Date(fechaIso)
  // const formateador = new Intl.DateTimeFormat('es-ES', {
  //   day: '2-digit',
  //   month: 'long',
  //   year: 'numeric',
  // });
  return format(fecha, 'yyyy-MM-dd hh:mm:ss')

  //return formateador.format(fecha);
}




export function useCustomers() {
  const customers: Ref<ICustomer[]> = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  //funcion para obtener los clientes
  const fetchCustomers = async (): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('http://localhost:3001/customers')

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API')
      }

      const json = await response.json()
      customers.value = json
    } catch (err: unknown) {
      error.value = (err as Error).message
      console.error('Error al obtener customers:', err)
    } finally {
      loading.value = false
    }
  }

  //funcion de agregar cliente
  const addCustomer = async (customer: ICustomer): Promise<void> => {
    loading.value = true //indica que esta en proceso
    error.value = null
    try {
      const response = await fetch('http://localhost:3001/customers', {
        method: 'POST', //envia datos a la api con metodo post
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
      })

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API')
      }

      //si la respuesta es ok, agrega el cliente a la lista
      const json = await response.json()
      customers.value.push(json)
    } catch (err: unknown) {
      error.value = (err as Error).message
      console.error('Error al agregar customer:', err)
    } finally {
      loading.value = false
    }
  }


  //funcion de editar cliente
  const editCustomer = async (customer: ICustomer): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`http://localhost:3001/customers`, {
        method: 'PATCH', //edita los datos de un cliente con metodo put
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer), //envia solo los campos editables
      })

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API')
      }

      //si la respuesta es ok, actualiza el cliente en la lista
      const json = await response.json()
      customers.value = customers.value.map((item: ICustomer) => {
        //map, devuelve una nueva lista con los clientes modificados
        if (item.id === customer.id) {
          //si el id coincide, actualiza el cliente
          return json
        }
        return item //si no coincide, devuelve el cliente original
      })
    } catch (err: unknown) {
      error.value = (err as Error).message
      console.error('Error al editar customer:', err)
    } finally {
      loading.value = false
    }
  }

  //funcion de eliminar cliente
  const deleteCustomerId = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`http://localhost:3001/customers/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error(`Error al eliminar cliente id:${id}`)
    }
    console.log(`Cliente id:${id} eliminado`)
    return true
  }
  catch (error) {
    console.error('Eror inesperado',error)
    return false
  }
}


  // const deleteCustomer = async (id: number): Promise<void> => {
  //   loading.value = true
  //   error.value = null
  //   try {
  //     await fetch(`http://localhost:3001/customers/${id}`, {
  //       method: 'DELETE', //elimina un cliente con metodo delete
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })


  //   } catch (err: unknown) {
  //     error.value = (err as Error).message
  //     console.error('Error al eliminar el customer:', err)
  //   } finally {
  //     loading.value = false
  //   }
  // }

  //funcion para obtener un cliente
  const fetchCustomer = async (id: number): Promise<undefined> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`http://localhost:3001/customers/${id}`)

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API')
      }

      const json = await response.json()
      return json
    } catch (err: unknown) {
      error.value = (err as Error).message
      console.error('Error al obtener customers:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    customers,
    loading,
    error,
    fetchCustomers,
    fetchCustomer,
    addCustomer,
    editCustomer,
    deleteCustomerId,
    formatearFecha,
  }
}
