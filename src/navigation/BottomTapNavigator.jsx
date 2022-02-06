import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/ListScreen";
import Portfolio from "../screens/Portfolio";
import WatchList from "../screens/WatchList";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={focused ? 30 : 24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Watchlist"
        component={WatchList}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="favorite"
              size={focused ? 30 : 24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5
              name="briefcase"
              size={focused ? 30 : 24}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
