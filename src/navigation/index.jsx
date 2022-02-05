import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../screens/ListScreen";
import CoinInsight from "../screens/CoinInsight";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Home"} component={ListScreen} />
      <Stack.Screen name={"CoinInsightScreen"} component={CoinInsight} />
    </Stack.Navigator>
  );
};

export default Navigation;
