import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
import { useWatchlist } from "../../contexts/WatchlistContext";
import CoinItem from "../../components/CoinItem";
import { getWatchlistedCoins } from "../../services/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";

const WatchList = () => {
  const { watchlistCoinIds } = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatCoinIds = () => watchlistCoinIds.join("%2C");

  const fetchWatchlistCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(1, formatCoinIds());
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    if (watchlistCoinIds.length > 0) {
      fetchWatchlistCoins();
    }
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refresh={loading}
          tintColor="white"
          onRefresh={fetchWatchlistCoins}
        />
      }
      ListHeaderComponent={
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            fontSize: 25,
            letterSpacing: 1,
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          Watchlist
        </Text>
      }
    />
  );
};

export default WatchList;
