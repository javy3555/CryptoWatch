import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../screens/ListScreen";
import CoinInsight from "../screens/CoinInsight";
import BottomTabNavigator from "../navigation/BottomTapNavigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListsScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"ListScreen"} component={BottomTabNavigator} />
      <Stack.Screen name={"CoinInsightScreen"} component={CoinInsight} />
    </Stack.Navigator>
  );
};

export default Navigation;
