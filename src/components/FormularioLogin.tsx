import CampoFormulario from "@/components/CampoFormulario";
import { credencialesMock, usuarioMock } from "@/data/usuarios";
import { useAutenticacionStore } from "@/store/autenticacionStore";
import {
  borderRadius,
  fontSize,
  fontWeight,
  semanticColors,
  spacing,
} from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const iniciarSesion = useAutenticacionStore((state) => state.iniciarSesion);

  function manejarLogin() {
    if (!email.trim() || !password.trim()) {
      setError("Completa todos los campos");
      return;
    }

    const emailCorrecto =
      email.trim().toLowerCase() === credencialesMock.email.toLowerCase();

    const passwordCorrecta = password === credencialesMock.password;

    if (!emailCorrecto || !passwordCorrecta) {
      setError("El correo o la contraseña son incorrectos");
      return;
    }

    iniciarSesion(usuarioMock);
    setError("");
    router.replace("/inicio");
  }

  return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Iniciar sesión</Text>

      <Text style={styles.descripcion}>Ingresa con tu cuenta de alumno</Text>

      <CampoFormulario
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        placeholder="alumno@examio.com"
        keyboardType="email-address"
      />

      <CampoFormulario
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={styles.boton}
        activeOpacity={0.75}
        onPress={manejarLogin}
      >
        <Text style={styles.textoBoton}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: semanticColors.surface,
    borderColor: semanticColors.border,
    borderWidth: 1,
    borderRadius: borderRadius.card,
    padding: spacing[5],
    gap: spacing[6],
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
  },
  titulo: {
    color: semanticColors.text,
    fontSize: fontSize.title,
    fontWeight: fontWeight.bold,
    textAlign: "center",
  },
  descripcion: {
    color: semanticColors.textMuted,
    fontSize: fontSize.bodySmall,
    textAlign: "center",
  },
  error: {
    color: "#b91c1c",
    fontSize: fontSize.bodySmall,
    textAlign: "center",
  },
  boton: {
    alignItems: "center",
    backgroundColor: semanticColors.primary,
    borderRadius: borderRadius.medium,
    paddingVertical: spacing[3],
  },
  textoBoton: {
    color: semanticColors.onPrimary,
    fontSize: fontSize.body,
    fontWeight: fontWeight.semibold,
  },
});
