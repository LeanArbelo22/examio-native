import { create } from "zustand";

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: string;
};

type Recordatorio = {
  id: number
  materia: string
  titulo: string
  fechaExamen: string
  horarioExamen: string
  fechaAviso: number
}

type AutenticacionStore = {
  usuario: Usuario | null; // null si no hay sesion activa
  iniciarSesion: (usuario: Usuario) => void; // la sesion recibe un usuario
  cerrarSesion: () => void;
  recordatorios: Recordatorio[];
  guardarRecordatorio: (recordatorio: Recordatorio) => void;
  eliminarRecordatorio: (id: number) => void;
};

export const useAutenticacionStore = create<AutenticacionStore>((set) => ({
  usuario: null,

  recordatorios: [],

  guardarRecordatorio: (recordatorio) => {
    set((state) => ({
      recordatorios: [
        ...state.recordatorios.filter(
          (aviso) => aviso.id !== recordatorio.id
        ),
        recordatorio,
      ],
    }));
  },

  eliminarRecordatorio: (id) => {
    set((state) => ({
      recordatorios: state.recordatorios.filter(
        (aviso) => aviso.id !== id
      ),
    }));
  },

  iniciarSesion: (usuario) => {
    set({ usuario });
  },

  cerrarSesion: () => {
   set({ usuario: null, recordatorios: [] });
  },
}));