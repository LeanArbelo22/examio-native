import {
  borderRadius, fontSize, fontWeight, semanticColors, spacing,
} from "@/styles/theme";
import { useRouter } from "expo-router";
import { Alert, Share, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function EvaluacionCard({
  id,
  materia,
  titulo,
  fecha,
  horario,
}: {
  id: number
  materia: string;
  titulo: string;
  fecha: string;
  horario: string;
}) {

  const router = useRouter();

  async function compartirEvaluacion() {
    try {
      await Share.share({
        message: `${materia}\n${titulo}\nFecha: ${fecha}\nHorario: ${horario}`,
      });
    } catch {
      Alert.alert("No se pudo compartir", "Intente nuevamente");
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.materia}>{materia}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.detalle}>Fecha: {fecha}</Text>
      <Text style={styles.detalle}>Horario: {horario}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={compartirEvaluacion}
      >
        <Text style={styles.materia}>Compartir evaluación</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          router.push({
            pathname: "/recordatorio",
            params: { id },
          })
        }
      >
        <Text style={styles.materia}>Crear recordatorio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: semanticColors.surface,
    borderColor: semanticColors.border,
    borderWidth: 1,
    borderRadius: borderRadius.card,
    padding: spacing[4],
    gap: spacing[2],
    width: "80%",
    alignSelf: "center",
  },
  materia: {
    color: semanticColors.primary,
    fontSize: fontSize.bodySmall,
    fontWeight: fontWeight.semibold,
  },
  titulo: {
    color: semanticColors.text,
    fontSize: fontSize.titleSmall,
    fontWeight: fontWeight.bold,
  },
  detalle: {
    color: semanticColors.textMuted,
    fontSize: fontSize.bodySmall,
  },
});
