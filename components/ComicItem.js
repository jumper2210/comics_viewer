import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
const ComicItem = (props) => {
  return (
    <TouchableOpacity style={styles.comicItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>title</Text>
      </View>
      <Text style={styles.image}>picture</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  comicItem: {
    borderRadius: 10,
    borderBottomWidth: 1,
    paddingVertical: 35,
    flexDirection: "row",
    backgroundColor: Colors.secondary,
  },
  title: {
    color: Colors.secondary,
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    alignSelf: "flex-end",
  },
  titleContainer: {
    marginLeft: 20,
    width: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
export default ComicItem;
