import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";
import ToDaysImage from "../../components/ToDaysImage";
import { PostImage } from "../../types";

export default function Home() {
  const [toDaysImage, setToDaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadToDaysImages = async () => {
      try {
        const toDaysImageResponse = await fetchApi();
        setToDaysImage(toDaysImageResponse);
      } catch (error) {
        setToDaysImage({});
      }
    };

    loadToDaysImages().catch(null);
  }, []);

  console.log(toDaysImage);
  return (
    <View style={styles.container}>
      <Header />
      <ToDaysImage {...toDaysImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
