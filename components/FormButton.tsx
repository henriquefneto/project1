import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

type FormButtonProps = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function FormButton({ label, onPress, loading, disabled }: FormButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, (disabled || loading) && styles.buttonDisabled]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading
        ? <ActivityIndicator color="#fff" />
        : <Text style={styles.label}>{label}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#3333ff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  buttonDisabled: {
    backgroundColor: "#3333ff40",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});