import { FC } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { PostImage } from "../../types";

const ToDaysImage: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 12,
  },
  date: {
    color: "white",
    fontSize: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    alignItems: "flex-end",
    margin: 6,
  },
});

export default ToDaysImage;
