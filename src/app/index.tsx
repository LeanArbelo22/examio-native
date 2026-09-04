import EvaluacionCard from "@/components/EvaluacionCard";
import { evaluaciones } from "@/data/evaluaciones";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  fontSize,
  fontWeight,
  semanticColors,
  spacing,
} from "@/styles/theme";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.titulo}>Proximas actividades</Text>
      <ScrollView>
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
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: "center",
    //resizeMode: "contain", -- sale advertencia deprecado, se agrega como prop de image
  },
  titulo: {
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    color: semanticColors.text,
    textAlign: "center",
    marginVertical: spacing[4],
  },
});
