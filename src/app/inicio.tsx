import EvaluacionCard from "@/components/EvaluacionCard";
import { evaluaciones } from "@/data/evaluaciones";
import { useAutenticacionStore } from "@/store/autenticacionStore";
import {
  borderRadius,
  fontSize,
  fontWeight,
  semanticColors,
  spacing,
} from "@/styles/theme";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Inicio() {
  const router = useRouter();

  const usuario = useAutenticacionStore((state) => state.usuario);

  const cerrarSesion = useAutenticacionStore((state) => state.cerrarSesion);

  function manejarLogout() {
    cerrarSesion();
    router.replace("/");
  }

  useEffect(() => { // si el usuario es null, redirige a la pantalla de login (en la web podia acceder a inicio sin usuario)
    if (usuario === null) {
      router.replace("/");
    }
  }, [usuario, router]); // si cambia el usuario o la ruta, se ejecuta el efecto

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <View>
          <Text style={styles.saludo}>{usuario?.nombre || "Alumno"}</Text>

          <Text style={styles.rol}>{usuario?.rol || ""}</Text>
        </View>

        <TouchableOpacity
          style={styles.botonLogout}
          activeOpacity={0.7}
          onPress={manejarLogout}
        >
          <Text style={styles.textoLogout}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Próximas actividades</Text>

      <ScrollView
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      >
        {evaluaciones.map((evaluacion) => (
          <EvaluacionCard
            key={evaluacion.id}
            materia={evaluacion.materia}
            titulo={evaluacion.titulo}
            fecha={evaluacion.fecha}
            horario={evaluacion.horario}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColors.screenBackground,
    paddingHorizontal: spacing[4],
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[4],
  },
  saludo: {
    color: semanticColors.text,
    fontSize: fontSize.titleSmall,
    fontWeight: fontWeight.bold,
  },
  rol: {
    color: semanticColors.textMuted,
    fontSize: fontSize.bodySmall,
    marginTop: spacing[1],
    textTransform: "capitalize",
  },
  botonLogout: {
    backgroundColor: semanticColors.primarySoft,
    borderColor: semanticColors.primaryBorder,
    borderWidth: 1,
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  },
  textoLogout: {
    color: semanticColors.primary,
    fontSize: fontSize.bodySmall,
    fontWeight: fontWeight.semibold,
  },
  titulo: {
    color: semanticColors.text,
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    textAlign: "center",
    marginVertical: spacing[4],
  },
  lista: {
    gap: spacing[4],
    paddingBottom: spacing[6],
  },
});
