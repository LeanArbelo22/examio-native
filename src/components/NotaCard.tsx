import { borderRadius, fontSize, fontWeight, semanticColors, spacing, } from "@/styles/theme";
import { StyleSheet, Text, View } from "react-native";

export default function NotaCard({
    materia,
    titulo,
    fecha,
    nota,
    devolucion,
}: {
    materia: string;
    titulo: string;
    fecha: string;
    nota: number;
    devolucion: string;
}) {
    return (
        <View style={styles.card}>
            <Text style={styles.materia}>{materia}</Text>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.detalle}>Fecha: {fecha}</Text>
            <Text style={styles.titulo}>Nota: {nota}</Text>
            <Text style={styles.detalle}>Devolución: {devolucion}</Text>
        </View>
    )
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
})

