import React, { useContext } from "react";
import { View, Text } from "react-native";
import { WishListContext } from "../../contexts/WatchlistContext";

const WatchList = () => {
  const { value } = useContext(WishListContext);
  console.warn(value);
  return (
    <View>
      <Text>Hellooooo</Text>
    </View>
  );
};

export default WatchList;
