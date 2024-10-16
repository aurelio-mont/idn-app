import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    paddingHorizontal: 16,
  },
});
