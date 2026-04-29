import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from "expo-navigation-bar";

type FullscreenProps = {
    children: React.ReactNode
    center?: boolean
    padding?: number
    gap?: number
}

export default function Fullscreen({children, center, padding = 20, gap}: FullscreenProps) {

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#121212");
    NavigationBar.setButtonStyleAsync("light");
  }, []);
  return (
    <View style={[styles.container, {padding, gap}, center && styles.center]}> 
      {children}
    <StatusBar style="auto" />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  }
});