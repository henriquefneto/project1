import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import ThemeContextProvider from "../contexts/ThemeContext";

type ThemeSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export default function ThemeSwitch({ value, onChange }: ThemeSwitchProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Switch Theme</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#0000009d", true: "#0000ff" }}
        thumbColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});