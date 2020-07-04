import React from "react";
import ComicsListScreen, {
  screenOptions as ComicsListScreenOptions,
} from "../screens/ComicsListScreen";
import { createStackNavigator } from "@react-navigation/stack";

import ComicDetailScreen, {
  screenOptions as ComicDetailScreenOptions,
} from "../screens/ComicDetailScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ViewerStackNavigator = createStackNavigator();

export const ViewerNavigator = () => {
  return (
    <ViewerStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ViewerStackNavigator.Screen
        name="ListOfComics"
        component={ComicsListScreen}
        options={ComicsListScreenOptions}
      />
      <ViewerStackNavigator.Screen
        name="ComicDetails"
        component={ComicDetailScreen}
        options={ComicDetailScreenOptions}
      />
    </ViewerStackNavigator.Navigator>
  );
};
