import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinInsight from "../screens/CoinInsight";
import BottomTabNavigator from "../navigation/BottomTapNavigator";
import AddNewAssetScreen from "../screens/AddNewAsset";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="ListsScreen">
      <Stack.Screen
        name={"ListScreen"}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CoinInsightScreen"}
        component={CoinInsight}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"AddNewAssetScreen"}
        component={AddNewAssetScreen}
        options={{
          title: "Add New Asset",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
