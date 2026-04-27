import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type FormInputProps = {
  asterisk?: boolean;
  label?: string;
  error?: string;
};

export default function FormInput({ asterisk, label, error }: FormInputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}<Text style={{ color: "red" }}>{asterisk && "*"}</Text></Text>
      <TextInput style={styles.input} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#0000009d",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
    errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 5,
  },
});
