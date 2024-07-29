export interface FormData {
  nombre: string;
  apellido: string;
  correo: string;
  direccion: string;
  ciudad: string;
  telefono: string;
}

export interface FormState {
  value: FormData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}