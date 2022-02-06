import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PortfolioAssetsItem from "../PortfolioAssetsItem";

const PortfolioAssetsList = () => {
  return (
    <View>
      <FlatList
        data={[{ id: "but" }]}
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
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add New Assets</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default PortfolioAssetsList;
