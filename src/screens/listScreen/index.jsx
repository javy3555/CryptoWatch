import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";
import { getCoinListData } from "../../services/request";

const ListScreen = () => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoinList = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const listData = await getCoinListData(pageNumber);
    setCoinList((previousCoins) => [...previousCoins, ...listData]);
    setLoading(false);
  };

  const refetchCoinList = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const listData = await getCoinListData();
    setCoinList(listData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  return (
    <FlatList
      data={coinList}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      onEndReached={() => fetchCoinList(coinList.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={refetchCoinList}
        />
      }
    />
  );
};

export default ListScreen;
