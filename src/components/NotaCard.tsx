import { borderRadius, fontSize, fontWeight, semanticColors, spacing, } from "@/styles/theme";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

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

    const escalaTarjeta = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animacion = Animated.spring(escalaTarjeta, {
            toValue: 1,
            delay: 300,
            useNativeDriver: true,
        });

        animacion.start();

        return () => animacion.stop();
    }, [escalaTarjeta]);

    return (
        <Animated.View
            style={[
                styles.card,
                { transform: [{ scale: escalaTarjeta }] },
            ]}
        >
            <Text style={styles.materia}>{materia}</Text>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.detalle}>Fecha: {fecha}</Text>
            <Text style={styles.titulo}>Nota: {nota}</Text>
            <Text style={styles.detalle}>Devolución: {devolucion}</Text>
        </Animated.View>
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

