import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import { useWatchlist } from "../../contexts/WatchlistContext";
import CoinItem from "../../components/CoinItem";
import { getWatchlistedCoins } from "../../services/request";

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
    fetchWatchlistCoins();
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
    />
  );
};

export default WatchList;
