import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <View>
      <ThemeSwitch value={false} onChange={() => {}} />
      <Image
        source={require("../assets/umbrella.png")}
        style={{ width: 370, height: 100 }}
        resizeMode="contain"
      />
      <Text style={styles.h1}>Volunteer Registration</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});
