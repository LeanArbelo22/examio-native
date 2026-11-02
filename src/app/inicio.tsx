import { useAutenticacionStore } from "@/store/autenticacionStore";
import {
  borderRadius,
  fontSize,
  fontWeight,
  semanticColors,
  spacing,
} from "@/styles/theme";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Inicio() {
  const router = useRouter();

  const usuario = useAutenticacionStore((state) => state.usuario);

  useEffect(() => { // si el usuario es null, redirige a la pantalla de login (en la web podia acceder a inicio sin usuario)
    if (usuario === null) {
      router.replace("/");
    }
  }, [usuario, router]); // si cambia el usuario o la ruta, se ejecuta el efecto

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio</Text>

      <Link href="/evaluaciones" asChild>
        <TouchableOpacity style={styles.tarjeta} activeOpacity={0.7}>
          <Text style={styles.saludo}>Evaluaciones</Text>
          <Text>Consultá tus próximos exámenes</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/historial" asChild>
        <TouchableOpacity style={styles.tarjeta} activeOpacity={0.7}>
          <Text style={styles.saludo}>Historial de notas</Text>
          <Text>Consultá tu promedio y resumen de notas</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/rendimiento" asChild>
        <TouchableOpacity style={styles.tarjeta} activeOpacity={0.7}>
          <Text style={styles.saludo}>Rendimiento académico</Text>
          <Text>Consultá tu promedio y porcentaje de aprobación</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColors.screenBackground,
    paddingHorizontal: spacing[4],
  },
  saludo: {
    color: semanticColors.text,
    fontSize: fontSize.titleSmall,
    fontWeight: fontWeight.bold,
  },
  titulo: {
    color: semanticColors.text,
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    textAlign: "center",
    marginVertical: spacing[4],
  },
  tarjeta: {
    backgroundColor: semanticColors.surface,
    borderColor: semanticColors.border,
    borderWidth: 1,
    borderRadius: borderRadius.card,
    padding: spacing[4],
    gap: spacing[2],
  },
});
