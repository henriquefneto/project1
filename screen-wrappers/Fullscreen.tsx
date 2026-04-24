import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type FullscreenProps = {
    children: React.ReactNode
    center?: boolean
    padding?: number
    gap?: number
}

export default function Fullscreen({children, center, padding = 20, gap}: FullscreenProps) {
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
    backgroundColor: "#ffffff",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  }
});