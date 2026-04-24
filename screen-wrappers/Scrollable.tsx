import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet,} from "react-native";

type ScrollableProps = {
    children: React.ReactNode
    padding?: number
    gap?: number
    onRefresh?: () => void
};
export default function Scrollable({children, padding = 20, gap, onRefresh}: ScrollableProps) {
  return (
    <ScrollView style={styles.container}>
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
});
