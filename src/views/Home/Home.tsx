import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";
import ToDaysImage from "../../components/ToDaysImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

export default function Home() {
  const [toDaysImage, setToDaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadToDaysImages = async () => {
      try {
        const toDaysImageResponse = await fetchApi();
        setToDaysImage(toDaysImageResponse);
      } catch (error) {
        setToDaysImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const toDayDate = format(date, "yyyy-MM-dd");
        const last5DaysDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const last5DaysImageResponse = await fetchApi(
          "&start_date=" + last5DaysDate + "&end_date=" + toDayDate
        );
        setLastFiveDaysImages(last5DaysImageResponse);
      } catch (error) {
        setLastFiveDaysImages([]);
      }
    };

    loadToDaysImages().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ToDaysImage {...toDaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
