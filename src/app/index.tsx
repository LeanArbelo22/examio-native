import FormularioLogin from "@/components/FormularioLogin";
import { semanticColors, spacing } from "@/styles/theme";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    /* PENDIENTE: INVESTIGAR COMO EVITAR QUE EL TECLADO SE SUPERPONGA CON LOS INPUTS */
    <View style={styles.pantalla}>
      <FormularioLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: semanticColors.screenBackground,
    padding: spacing[5],
  },
});
