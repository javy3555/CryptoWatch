import React, { useContext, createContext } from "react";

const WishListContext = createContext();

export const useWatchlist

const WatchlistProvider = ({ children }) => {
  return (
    <WishListContext.Provider value={{ value: "jay" }}>
      {children}
    </WishListContext.Provider>
  );
};

export default WatchlistProvider;
