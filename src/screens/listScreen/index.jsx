import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
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
    <View>
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
        Cryptoassets
      </Text>
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
    </View>
  );
};

export default ListScreen;
