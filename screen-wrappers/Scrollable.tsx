import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet,} from "react-native";

type ScrollableProps = {
    children: React.ReactNode
    center?: boolean
    padding?: number
    gap?: number
    onRefresh?: () => void
};
export default function Scrollable({children, center, padding = 20, gap, onRefresh}: ScrollableProps) {
  return (
    <ScrollView style={[styles.container, {padding, gap}, center && styles.center]}>
      {children}
    <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 48,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  }
});
