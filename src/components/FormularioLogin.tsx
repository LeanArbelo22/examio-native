import CampoFormulario from "@/components/CampoFormulario";
import { View } from "react-native";

export default function FormularioLogin() {
  return (
    <View>
      <CampoFormulario
        label="Correo electrónico"
        value={""}
        onChangeText={(e) => console.log(e)}
        placeholder="alumno@examio.com"
        keyboardType="email-address"
      />
      <CampoFormulario
        label="Contraseña"
        value={""}
        onChangeText={(e) => console.log(e)}
        placeholder="Ingresá tu contraseña"
        secureTextEntry
      />
    </View>
  );
}
