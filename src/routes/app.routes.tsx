import React from "react";
import Home from "../modules/screens/Home/Home";

import { propsNavigationStack } from "./Models";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Edit from "../modules/screens/Edit/Edit";

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Edit" component={Edit} />
      </Navigator>
    </NavigationContainer>
  );
};

export { AppRoutes };
