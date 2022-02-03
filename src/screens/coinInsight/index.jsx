import React, { useState } from "react";
import { View, Text, Dimensions, TextInput } from "react-native";
import CoinInsightHeader from "./components/CoinInsightHeader";
import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartYLabel,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";

const coinInsight = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price: { usd },
      price_change_percentage_24h,
    },
    prices,
  } = Coin;

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(usd.toString());

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const graphColor = usd > prices[0][1] ? "#16c784" : "#ea3943";

  const screenWidth = Dimensions.get("window").width;

  const onChangeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0;
    setUsdValue((floatValue * usd).toString());
  };

  const onChangeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value) || 0;
    setCoinValue((floatValue / usd).toString());
  };

  const formatPrice = (value) => {
    "worklet";
    if (value == "") {
      return `$${usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
        <CoinInsightHeader
          image={small}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        ></CoinInsightHeader>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.nameStyle}>{name}</Text>
            <ChartYLabel format={formatPrice} style={styles.priceStyle} />
          </View>
          <View
            style={{
              backgroundColor:
                price_change_percentage_24h < 0 ? "#ea3943" : "#16c784",
              padding: 5,
              borderRadius: 5,
              flexDirection: "row",
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={14}
              color="white"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.priceChangeStyle}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>
        <View>
          <ChartPath
            height={screenWidth / 2}
            stroke={graphColor}
            width={screenWidth}
          />
          <ChartDot
            style={{
              backgroundColor: graphColor,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white" }}>{symbol.toUpperCase()}</Text>
            <TextInput
              style={styles.inputStyle}
              value={coinValue}
              keyboardType="numeric"
              onChangeText={onChangeCoinValue}
            />
          </View>

          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white" }}>USD</Text>
            <TextInput
              style={styles.inputStyle}
              value={usdValue}
              keyboardType="numeric"
              onChangeText={onChangeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default coinInsight;
