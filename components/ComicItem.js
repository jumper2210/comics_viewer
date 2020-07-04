import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
const ComicItem = (props) => {
  return (
    <TouchableOpacity style={styles.comicItem} onPress={props.onSelect}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Image source={{ uri: props.image }} style={styles.image} />
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
    color: Colors.primary,
    fontSize: 25,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 20,
    backgroundColor: "#ccc",
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  titleContainer: {
    marginLeft: 30,
    width: 150,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default ComicItem;
