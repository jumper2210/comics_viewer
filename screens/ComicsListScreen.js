import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ClinicItem from "../components/ComicItem";

const ComicsListScreen = () => {
  const [comics, setComics] = useState("");

  let url = "https://xkcd.com/37/info.0.json";
  console.log(comics);
  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch Comics");
        }
        return res.json();
      })
      .then((resData) => {
        setComics(resData);
      });
  }, []);

  return (
    <View style={styles.item}>
      <ClinicItem title={comics.title} url={comics.img} />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
});
export default ComicsListScreen;
