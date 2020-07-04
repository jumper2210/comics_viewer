import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ViewerNavigator } from "./ComicsNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <ViewerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
