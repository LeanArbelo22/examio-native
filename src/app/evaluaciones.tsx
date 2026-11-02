import EvaluacionCard from "@/components/EvaluacionCard";
import { evaluaciones } from "@/data/evaluaciones";
import { borderRadius, fontSize, fontWeight, semanticColors, spacing, } from "@/styles/theme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Evaluaciones() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Próximas evaluaciones</Text>
            <ScrollView contentContainerStyle={styles.lista}>
                {evaluaciones.map((evaluacion) => (
                    <EvaluacionCard
                        key={evaluacion.id}
                        id={evaluacion.id}
                        materia={evaluacion.materia}
                        titulo={evaluacion.titulo}
                        fecha={evaluacion.fecha}
                        horario={evaluacion.horario}
                    />
                ))}
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
})