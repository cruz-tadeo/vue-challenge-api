export interface ICustomer {
  [x: string]: any;
  id?: number;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  creadoEn?: string;
  actualizadoEn?: string;
}

