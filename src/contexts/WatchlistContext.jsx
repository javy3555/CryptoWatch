import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WatchListContext = createContext();

export const useWatchlist = () => useContext(WatchListContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistCoinIds, setWatchlistCoinIds] = useState([]);

  const getWatchlistData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@watchlistCoins");
      setWatchlistCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  const storeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchlist = [...watchlistCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem("@watchlistCoins", jsonValue);
      setWatchlistCoinIds(newWatchlist);
    } catch (e) {
      console.warn(e);
    }
  };

  const removeWatchlistCoinId = async (coinId) => {
    const newWatchlist = watchlistCoinIds.filter(
      (coinIdValue) => coinIdValue !== coinId
    );
    const jsonValue = JSON.stringify(newWatchlist);
    await AsyncStorage.setItem("@watchlistCoins", jsonValue);
    setWatchlistCoinIds(newWatchlist);
  };

  return (
    <WatchListContext.Provider
      value={{ watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchlistProvider;
