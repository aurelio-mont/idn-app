import { StyleSheet, Text, View } from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
  title: {
    color: "white",
  },
});

export default Detail;
