import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PortfolioAssetsItem from "../PortfolioAssetsItem";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  allPortfolioAssets,
  allPortfolioBoughtAssetsInStorage,
} from "../../../../atoms/PortfolioAssets";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PortfolioAssetsList = () => {
  const [storageAssets, setStorageAssets] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );

  const getCurrentBalance = () =>
    assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.currentPrice * currentAsset.quantityBought,
      0
    );

  const getCurrentValueChange = () => {
    const currentBalance = getCurrentBalance();
    const bought = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );

    return currentBalance - bought;
  };

  const getCurrentPercentageChange = () => {
    const currentBalance = getCurrentBalance();
    const bought = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );
    return ((currentBalance - bought) / bought) * 100 || 0;
  };

  const onDeleteAsset = async (asset) => {
    const newAssets = storageAssets.filter(
      (coin) => coin.unique_id !== asset.item.unique_id
    );
    const jsonValue = JSON.stringify(newAssets);
    await AsyncStorage.setItem("@portfolio_coins", jsonValue);
    setStorageAssets(newAssets);
  };

  const renderDeleteButton = (data) => {
    return (
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "#EA3943",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: 30,
          marginLeft: 20,
        }}
        onPress={() => onDeleteAsset(data)}
      >
        <FontAwesome name="trash-o" size={24} color="white" />
      </Pressable>
    );
  };

  const navigation = useNavigation();

  const assets = useRecoilValue(allPortfolioAssets);

  const isChangePositive = () => getCurrentValueChange() >= 0;

  return (
    <View style={{ flex: 1 }}>
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
        My Portfolio
      </Text>
      <SwipeListView
        data={assets}
        renderItem={({ item }) => <PortfolioAssetsItem assetItem={item} />}
        rightOpenValue={-75}
        disableRightSwipe
        closeOnRowPress
        keyExtractor={({ id }, index) => `${id}${index}`}
        renderHiddenItem={(data) => renderDeleteButton(data)}
        ListHeaderComponent={
          <>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>
                  {getCurrentBalance().toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </Text>
                <Text
                  style={{
                    ...styles.valueChange,
                    color: isChangePositive() ? "#16c784" : "#ea3943",
                  }}
                >
                  $
                  {getCurrentValueChange().toLocaleString(undefined, {
                    maximumFractionDigits: 5,
                  })}{" "}
                  (All Time)
                </Text>
              </View>
              <View>
                <View
                  style={{
                    ...styles.priceChangePercenterContainer,
                    backgroundColor: isChangePositive() ? "#16c784" : "#ea3943",
                  }}
                >
                  <AntDesign
                    name={isChangePositive() ? "caretup" : "caretdown"}
                    size={14}
                    color="white"
                    style={{ alignSelf: "center", marginRight: 5 }}
                  />
                  <Text style={styles.percentageChange}>
                    {getCurrentPercentageChange().toFixed(2)}%
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.assetsLabel}>Your Assets</Text>
          </>
        }
      />
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNewAssetScreen")}
      >
        <Text style={styles.buttonText}>Add New Assets</Text>
      </Pressable>
    </View>
  );
};

export default PortfolioAssetsList;
