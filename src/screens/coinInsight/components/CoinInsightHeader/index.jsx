import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinInsightHeader = (props) => {
  const { image, symbol, marketCapRank } = props;

  const navigation = useNavigation();

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
      <FontAwesome name="user-circle-o" size={25} color="white" />
    </View>
  );
};

export default CoinInsightHeader;
