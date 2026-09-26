import { create } from "zustand";

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: string;
};

type AutenticacionStore = {
  usuario: Usuario | null; // null si no hay sesion activa
  iniciarSesion: (usuario: Usuario) => void; // la sesion recibe un usuario
  cerrarSesion: () => void;
};

export const useAuthStore = create<AutenticacionStore>((set) => ({
  usuario: null,

  iniciarSesion: (usuario) => {
    set({ usuario });
  },

  cerrarSesion: () => {
    set({ usuario: null });
  },
}));