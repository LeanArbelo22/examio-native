import { useAutenticacionStore } from "@/store/autenticacionStore";
import { useEffect } from "react";
import { Alert, AppState } from "react-native";

export default function AvisosRecordatorios() {
  useEffect(() => {
    const temporizador = setInterval(() => {
      if (AppState.currentState !== "active") {
        return;
      }

      const estado = useAutenticacionStore.getState();

      if (!estado.usuario) {
        return;
      }

      const pendientes = estado.recordatorios.filter(
        (aviso) => aviso.fechaAviso <= Date.now()
      );

      if (pendientes.length === 0) {
        return;
      }

      for (const aviso of pendientes) {
        estado.eliminarRecordatorio(aviso.id);
      }

      Alert.alert(
        "Recordatorio de evaluación",
        pendientes.map((aviso) =>
          `${aviso.materia} - ${aviso.titulo}\nFecha: ${aviso.fechaExamen}\nHorario: ${aviso.horarioExamen}`
        ).join("\n\n")
      );
    }, 1000);

    return () => clearInterval(temporizador);
  }, []);

  return null;
}