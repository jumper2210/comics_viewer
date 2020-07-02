import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ComicsNavigator } from "./ComicsNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ComicsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
