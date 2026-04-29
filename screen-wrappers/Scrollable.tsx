import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

type ScrollableProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
  onRefresh?: () => void;
};
export default function Scrollable({
  children,
  center,
  padding = 20,
  gap,
  onRefresh,
}: ScrollableProps) {
  
useEffect(() => {
  NavigationBar.setBackgroundColorAsync("#121212");
  NavigationBar.setButtonStyleAsync("light");
}, []);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView style={[styles.container, { padding, gap }, center && styles.center]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    marginTop: 48,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
