import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type FormInputProps = {
  asterisk?: boolean;
  label?: string;
  error?: string;
  value?: string;
  maxLength?: number;
  numericOnly?: boolean;
  onChangeText?: (text: string) => void;
};

export default function FormInput({
  asterisk,
  label,
  error,
  onChangeText,
  value,
  maxLength,
  numericOnly,
}: FormInputProps) {
  return (
    <View>
      <Text style={styles.label}>
        {label}
        <Text style={{ color: "red" }}>{asterisk && "*"}</Text>
      </Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        keyboardType={numericOnly ? "numeric" : "default"}
        inputMode={numericOnly ? "numeric" : "text"}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff3d",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#1e1e1e",
  },
  errorText: {
    color: "#ff4d4d",
    fontSize: 12,
    marginTop: 5,
  },
  inputError: {
    borderColor: "#FF0000",
  },
});
