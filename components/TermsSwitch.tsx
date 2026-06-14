import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

type TermsSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export default function TermsSwitch({ value, onChange }: TermsSwitchProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Accept the Terms</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});