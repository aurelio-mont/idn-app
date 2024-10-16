import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";

export default function Home() {
  const [toDaysImage, setToDaysImage] = useState();

  useEffect(() => {
    const loadToDaysImages = async () => {
      try {
        const toDaysImageResponse = await fetchApi();
        setToDaysImage(toDaysImageResponse);
      } catch (error) {
        setToDaysImage(undefined);
      }
    };

    loadToDaysImages().catch(null);
  }, []);

  console.log(toDaysImage);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
