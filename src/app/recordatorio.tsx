import { evaluaciones } from "@/data/evaluaciones";
import { useAutenticacionStore } from "@/store/autenticacionStore";
import { borderRadius, fontSize, fontWeight, semanticColors, spacing, } from "@/styles/theme";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Recordatorio() {

    const router = useRouter()

    const recordatorios = useAutenticacionStore(
        (state) => state.recordatorios
    )

    const guardar = useAutenticacionStore(
        (state) => state.guardarRecordatorio
    )

    const usuario = useAutenticacionStore(
        (state) => state.usuario
    )


    const { id } = useLocalSearchParams<{ id: string }>();

    const evaluacion = evaluaciones.find(
        (examen) => examen.id === Number(id)
    );

    const [fechaAviso, setFechaAviso] = useState(new Date());

    function elegirFecha() {
        DateTimePickerAndroid.open({
            value: fechaAviso,
            mode: "date",
            onValueChange: (_evento, fechaElegida) => {
                setFechaAviso(fechaElegida);
            }
        })
    }

    function elegirHora() {
        DateTimePickerAndroid.open({
            value: fechaAviso,
            mode: "time",
            is24Hour: true,
            onValueChange: (_evento, horaElegida) => {
                setFechaAviso(horaElegida);
            },
        });
    }

    function guardarRecordatorio() {
        if (fechaAviso.getTime() <= Date.now()) {
            Alert.alert("Elegí fecha y horas correctas.")
            return
        }

        if (!evaluacion) {
            Alert.alert("No se encontró la evaluación");
            return;
        }

        guardar({
            id: evaluacion.id,
            materia: evaluacion.materia,
            titulo: evaluacion.titulo,
            fechaExamen: evaluacion.fecha,
            horarioExamen: evaluacion.horario,
            fechaAviso: fechaAviso.getTime(),
        });

        Alert.alert("Recordatorio guardado",)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Crear recordatorio</Text>
            <ScrollView contentContainerStyle={styles.lista}>
                {evaluacion ? (
                    <View style={styles.tarjeta}>
                        <Text style={styles.materia}>{evaluacion.materia}</Text>
                        <Text style={styles.nombreExamen}>{evaluacion.titulo}</Text>
                        <Text style={styles.detalle}>
                            Fecha del examen: {evaluacion.fecha}
                        </Text>
                        <Text style={styles.detalle}>
                            Horario: {evaluacion.horario}
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => router.replace("/evaluaciones")}
                        >
                            <Text style={styles.materia}>Volver a evaluaciones</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <Text>No se encontró la evaluación.</Text>
                )
                }
                <Text>Elegí fecha y hora del recordatorio</Text>

                <Text style={styles.nombreExamen}>¿Cuándo querés el aviso?</Text>

                <TouchableOpacity
                    style={styles.tarjeta}
                    activeOpacity={0.7}
                    onPress={elegirFecha}
                >
                    <Text style={styles.detalle}>Fecha del recordatorio</Text>
                    <Text style={styles.materia}>
                        {fechaAviso.toLocaleDateString("es-AR")}
                    </Text>
                    <Text style={styles.detalle}>Tocá para elegir la fecha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tarjeta}
                    activeOpacity={0.7}
                    onPress={elegirHora}
                >
                    <Text style={styles.detalle}>Hora del recordatorio</Text>
                    <Text style={styles.materia}>
                        {fechaAviso.toLocaleTimeString("es-AR", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </Text>
                    <Text style={styles.detalle}>Tocá para elegir la hora</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botonVolver}
                    activeOpacity={0.7}
                    onPress={guardarRecordatorio}
                >
                    <Text style={styles.textoVolver}>Guardar recordatorio</Text>
                </TouchableOpacity>

                <Text style={styles.nombreExamen}>Recordatorios pendientes</Text>

                {recordatorios.length === 0 ? (
                    <Text style={styles.detalle}>No tenés recordatorios guardados.</Text>
                ) : (
                    recordatorios.map((aviso) => (
                        <View key={aviso.id} style={styles.tarjeta}>
                            <Text style={styles.materia}>{aviso.materia}</Text>
                            <Text style={styles.nombreExamen}>{aviso.titulo}</Text>
                            <Text style={styles.detalle}>
                                Aviso: {new Date(aviso.fechaAviso).toLocaleString("es-AR")}
                            </Text>
                        </View>
                    ))
                )}
            </ScrollView >
        </View >
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
    tarjeta: {
        backgroundColor: semanticColors.surface,
        borderColor: semanticColors.border,
        borderWidth: 1,
        borderRadius: borderRadius.card,
        padding: spacing[4],
        gap: spacing[2],
    },
    materia: {
        color: semanticColors.primary,
        fontSize: fontSize.bodySmall,
        fontWeight: fontWeight.semibold,
    },
    nombreExamen: {
        color: semanticColors.text,
        fontSize: fontSize.titleSmall,
        fontWeight: fontWeight.bold,
    },
    detalle: {
        color: semanticColors.textMuted,
        fontSize: fontSize.bodySmall,
    },
})