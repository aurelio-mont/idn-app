import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParam } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
  const {
    params: { date, title, url, explanation },
  } = useRoute<NativeStackScreenProps<RootStackParam, "Detail">["route"]>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 12,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 12,
  },
  date: {
    color: "white",
    fontSize: 18,
    marginBottom: 12,
  },
  explanationContainer: {
    marginVertical: 12,
  },
  explanation: {
    color: "white",
    fontSize: 16,
  },
});

export default Detail;
