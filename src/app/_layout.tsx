import { useAutenticacionStore } from "@/store/autenticacionStore";
import { borderRadius, fontSize, fontWeight, semanticColors, spacing } from "@/styles/theme";
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // evita que el contenido se superponga con la barra de estado o navegacion

export default function RootLayout() {

  const usuario = useAutenticacionStore((state) => state.usuario);
  const router = useRouter();

  const cerrarSesion = useAutenticacionStore((state) => state.cerrarSesion);

  function manejarLogout() {
    cerrarSesion();
    router.replace("/");
  }
  return (
    <SafeAreaView style={styles.pantalla}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      {usuario !== null && (
        <View style={styles.encabezado}>
          <View>
            <Text style={styles.saludo}>{usuario.nombre}</Text>
            <Text style={styles.rol}>{usuario.rol}</Text>
          </View>

          <TouchableOpacity
            style={styles.botonLogout}
            activeOpacity={0.7}
            onPress={manejarLogout}
          >
            <Text style={styles.textoLogout}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
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

  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
    marginTop: spacing[4],
  },
  saludo: {
    color: semanticColors.text,
    fontSize: fontSize.titleSmall,
    fontWeight: fontWeight.bold,
  },
  rol: {
    color: semanticColors.textMuted,
    fontSize: fontSize.bodySmall,
    marginTop: spacing[1],
    textTransform: "capitalize",
  },
  botonLogout: {
    backgroundColor: semanticColors.primarySoft,
    borderColor: semanticColors.primaryBorder,
    borderWidth: 1,
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  },
  textoLogout: {
    color: semanticColors.primary,
    fontSize: fontSize.bodySmall,
    fontWeight: fontWeight.semibold,
  },
});
