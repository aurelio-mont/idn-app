import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./src/views/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 30 : 0,
        }}
      >
        <Home />
      </View>
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
