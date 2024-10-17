import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImageTypes } from "../../types";

const PostImage: FC<PostImageTypes> = ({ title, date }) => {
  return (
    <View style={styles.container}>
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
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
  },
  date: {
    color: "white",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default PostImage;
