import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import CoinInsightHeader from "./components/CoinInsightHeader";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartYLabel,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";
import { useRoute } from "@react-navigation/native";
import { getInsightCoinData } from "../../services/request";
import { getCoinChart } from "../../services/request";

const CoinInsight = () => {
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState("");
  const [coinData, setCoinData] = useState(null);

  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchCoinData = await getInsightCoinData(coinId);
    const fetchMarketData = await getCoinChart(coinId);
    setCoinData(fetchCoinData);
    setChartData(fetchMarketData);
    setUsdValue(fetchCoinData.market_data.current_price.usd.toString());
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coinData || !chartData) {
    return <ActivityIndicator size="large" />;
  }

  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price: { usd },
      price_change_percentage_24h,
    },
  } = coinData;

  const { prices } = chartData;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "white";
  const graphColor = usd > prices[0][1] ? "#16c784" : "#ea3943";
  const screenWidth = Dimensions.get("window").width;

  const onChangeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * usd).toString());
  };

  const onChangeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / usd).toString());
  };

  const formatPrice = (value) => {
    "worklet";
    if (value == "") {
      return `$${usd.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}`;
    }
    return `$${parseFloat(value).toLocaleString(undefined, {
      maximumFractionDigits: 2,
    })}`;
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
              backgroundColor: percentageColor,
              paddingHorizontal: 3,
              paddingVertical: 8,
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
            strokeWidth={2}
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

export default CoinInsight;
