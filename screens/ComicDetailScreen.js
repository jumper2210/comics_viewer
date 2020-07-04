import React from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../UI/CustomHeaderButton";
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
    height: "100%",
    minHeight: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
});
export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.ComicDetail,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Back"
          iconName="md-arrow-back"
          onPress={() => {
            navData.navigation.navigate("ListOfComics");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ComicDetailScreen;
