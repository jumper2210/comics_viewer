import React from "react";
import { View, StyleSheet } from "react-native";
import ClinicItem from "../components/ComicItem";
const ComicsListScreen = () => {
  return (
    <View style={styles.item}>
      <ClinicItem />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
});
export default ComicsListScreen;
