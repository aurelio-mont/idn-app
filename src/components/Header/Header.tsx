import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.lefContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/nasa-logo.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  lefContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 60,
    height: 60,
  },
});
