import NotaCard from "@/components/NotaCard";
import { notas } from "@/data/notas";
import { borderRadius, fontSize, fontWeight, semanticColors, spacing, } from "@/styles/theme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Historial() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Historial de notas</Text>
            <ScrollView contentContainerStyle={styles.lista}>
                {notas.map((examen) => (
                    <NotaCard
                        key={examen.id}
                        materia={examen.materia}
                        titulo={examen.titulo}
                        fecha={examen.fecha}
                        nota={examen.nota}
                        devolucion={examen.devolucion}
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