import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

const [isLoading, setIsLoading] = useState<boolean>(true);

useEffect(() => {
  // Set timeout to hide loader after 3 seconds
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  // Cleanup timer to prevent memory leaks
  return () => clearTimeout(timer);
}, []);


export default function FakeLoadingScreen() {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Loading, please wait...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Loaded!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});
