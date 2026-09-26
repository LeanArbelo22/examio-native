import { semanticColors } from "@/styles/theme";
import { Stack } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // evita que el contenido se superponga con la barra de estado o navegacion

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.pantalla}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <View style={styles.contenido}>
        {/* headerShown evita mostrar el header por defecto de expo router */}
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: semanticColors.screenBackground,
  },
  header: {
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 80,
    //resizeMode: "contain", -- sale advertencia deprecado, se agrega como prop de image
  },
  contenido: {
    flex: 1,
  },
});
