import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { useSelector } from "react-redux";

const ComicDetailScreen = (props) => {
  const comicId = props.route.params.comicId;
  const selectedComic = useSelector((state) =>
    state.comics.comics.find((comics) => comics.num === comicId)
  );

  return <Image source={{ uri: selectedComic.img }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: "100%",
    minHeight: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
});

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.comicTitle,
  };
};

export default ComicDetailScreen;
