import { notas } from "@/data/notas";
import { borderRadius, fontSize, fontWeight, semanticColors, spacing, } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function Rendimiento() {

    const escalaPromedio = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animacion = Animated.sequence([
            Animated.spring(escalaPromedio, {
                toValue: 1.8,
                useNativeDriver: true,
            }),
            Animated.spring(escalaPromedio, {
                toValue: 1,
                useNativeDriver: true,
            }),
        ]);

        animacion.start();

        return () => animacion.stop();
    }, [escalaPromedio]);

    const router = useRouter()
    let sumaNotas = 0
    let notasPromocion = 0
    let desaprobadas = 0
    let notaMayor = notas.length > 0 ? notas[0].nota : 0
    let notaMenor = notas.length > 0 ? notas[0].nota : 0

    for (const examen of notas) {
        sumaNotas = sumaNotas + examen.nota;

        if (examen.nota >= 7) {
            notasPromocion = notasPromocion + 1
        }

        if (examen.nota < 4) {
            desaprobadas = desaprobadas + 1;
        }
        if (examen.nota > notaMayor) {
            notaMayor = examen.nota
        }
        if (examen.nota < notaMenor) {
            notaMenor = examen.nota
        }
    }

    const promedio = notas.length > 0 ? sumaNotas / notas.length : 0;
    const porcentajePromocion = notas.length > 0 ? (notasPromocion / notas.length) * 100 : 0;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rendimiento académico</Text>
            <ScrollView contentContainerStyle={styles.lista}>
                <View style={styles.resumen}>
                    <Text style={styles.etiqueta}>Promedio general</Text>

                    <Animated.Text
                        style={[
                            styles.promedio,
                            { transform: [{ scale: escalaPromedio }] },
                        ]}
                    >
                        {promedio.toFixed(1)}
                    </Animated.Text>

                    <Text style={styles.dato}>
                        Evaluaciones rendidas: {notas.length}
                    </Text>
                    <Text style={styles.dato}>
                        Con nota de promoción: {notasPromocion}
                    </Text>
                    <View style={styles.barraFondo}>
                        <View
                            style={[
                                styles.barraRelleno,
                                { width: `${porcentajePromocion}%` },
                            ]}
                        />
                    </View>
                    <Text style={styles.porcentaje}>
                        {porcentajePromocion.toFixed(0)}% con nota de promoción
                    </Text>
                    <Text style={styles.dato}>
                        Evaluaciones desaprobadas: {desaprobadas}
                    </Text>
                    <Text style={styles.dato}>
                        Nota más alta: <Text style={styles.valor}>{notaMayor}</Text>
                    </Text>

                    <Text style={styles.dato}>
                        Nota más baja: <Text style={styles.valor}>{notaMenor}</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.botonVolver}
                    activeOpacity={0.7}
                    onPress={() => router.replace("/historial")}
                >
                    <Text style={styles.textoVolver}>Ver historial de notas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botonVolver}
                    activeOpacity={0.7}
                    onPress={() => router.replace("/inicio")}
                >
                    <Text style={styles.textoVolver}>Volver al inicio</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacing[4],
    },
    lista: {
        gap: spacing[4],
        paddingVertical: spacing[4],
    },
    titulo: {
        color: semanticColors.text,
        fontSize: fontSize.title,
        fontWeight: fontWeight.bold,
        textAlign: "center",
        marginVertical: spacing[4],
    },
    botonVolver: {
        backgroundColor: semanticColors.primarySoft,
        borderColor: semanticColors.primaryBorder,
        borderWidth: 1,
        borderRadius: borderRadius.medium,
        padding: spacing[3],
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
    },
    textoVolver: {
        color: semanticColors.primary,
        fontSize: fontSize.bodySmall,
        fontWeight: fontWeight.semibold,
    },
    resumen: {
        backgroundColor: semanticColors.surface,
        borderColor: semanticColors.border,
        borderWidth: 1,
        borderRadius: borderRadius.card,
        padding: spacing[4],
        gap: spacing[3],
        width: "80%",
        alignSelf: "center",
    },
    etiqueta: {
        color: semanticColors.textMuted,
        fontSize: fontSize.body,
        textAlign: "center",
    },
    promedio: {
        color: semanticColors.primary,
        fontSize: fontSize.display,
        fontWeight: fontWeight.bold,
        textAlign: "center",
    },
    dato: {
        color: semanticColors.text,
        fontSize: fontSize.body,
        fontWeight: fontWeight.semibold,
    },
    porcentaje: {
        color: semanticColors.primary,
        fontSize: fontSize.titleSmall,
        fontWeight: fontWeight.semibold,
    },
    barraFondo: {
        height: 12,
        backgroundColor: semanticColors.primarySoft,
        borderRadius: borderRadius.pill,
        overflow: "hidden",
    },
    barraRelleno: {
        height: "100%",
        backgroundColor: semanticColors.primary,
    },
    valor: {
        color: semanticColors.primary,
        fontWeight: fontWeight.bold,
    },
})