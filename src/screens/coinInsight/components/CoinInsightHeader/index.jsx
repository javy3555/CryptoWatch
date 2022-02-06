import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../../../contexts/WatchlistContext";

const CoinInsightHeader = (props) => {
  const { coinId, image, symbol, marketCapRank } = props;
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();

  const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);

  const handleWatchlistCoin = () => {
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.symbolStyle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={styles.rankStyle}>#{marketCapRank}</Text>
        </View>
      </View>
      <MaterialIcons
        name={checkIfCoinIsWatchlisted() ? "favorite" : "favorite-outline"}
        size={25}
        color={checkIfCoinIsWatchlisted() ? "#FFBF00" : "white"}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
};

export default CoinInsightHeader;
