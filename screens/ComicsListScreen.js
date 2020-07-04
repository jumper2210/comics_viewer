import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ComicItem from "../components/ComicItem";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import * as clinicsActions from "../store/actions/comics";
import { useSelector, useDispatch } from "react-redux";
const ComicsListScreen = (props) => {
  const comics = useSelector((state) => state.comics.comics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clinicsActions.fetchComics());
  }, [dispatch]);

  return (
    <FlatList
      data={comics}
      keyExtractor={(item) => item.num.toString()}
      renderItem={(itemData) => (
        <View style={styles.item}>
          <ComicItem
            image={itemData.item.img}
            title={itemData.item.title}
            onSelect={() => {
              props.navigation.navigate("ComicDetails", {
                comicTitle: itemData.item.title,
                comicId: itemData.item.num,
              });
            }}
          />
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
});
export default ComicsListScreen;
