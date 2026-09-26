import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  borderRadius,
  fontSize,
  semanticColors,
  spacing,
} from "@/styles/theme";

export default function CampoFormulario({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
}: {
  label: string;
  value: string;
  onChangeText: (texto: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={semanticColors.textMuted}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: spacing[2],
  },
  label: {
    color: semanticColors.textStrong,
    fontSize: fontSize.bodySmall,
  },
  input: {
    backgroundColor: semanticColors.surface,
    borderColor: semanticColors.border,
    borderWidth: 1,
    borderRadius: borderRadius.medium,
    color: semanticColors.text,
    fontSize: fontSize.body,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
});