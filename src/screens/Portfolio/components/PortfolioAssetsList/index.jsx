import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PortfolioAssetsItem from "../PortfolioAssetsItem";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue, useRecoilState } from "recoil";
import { allPortfolioAssets } from "../../../../atoms/PortfolioAssets";
const PortfolioAssetsList = () => {
  const navigation = useNavigation();

  const assets = useRecoilValue(allPortfolioAssets);
  return (
    <View>
      <FlatList
        data={assets}
        renderItem={({ item }) => <PortfolioAssetsItem assetItem={item} />}
        ListHeaderComponent={
          <>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>$2,000</Text>
                <Text style={styles.valueChange}>$1000 (All Time)</Text>
              </View>
              <View>
                <View style={styles.priceChangePercenterContainer}>
                  <AntDesign
                    name={"caretup"}
                    size={14}
                    color="white"
                    style={{ alignSelf: "center", marginRight: 5 }}
                  />
                  <Text style={styles.percentageChange}>1.2%</Text>
                </View>
              </View>
            </View>
            <Text style={styles.assetsLabel}>Your Assets</Text>
          </>
        }
        ListFooterComponent={
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("AddNewAssetScreen")}
          >
            <Text style={styles.buttonText}>Add New Assets</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default PortfolioAssetsList;
