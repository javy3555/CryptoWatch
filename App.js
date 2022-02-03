import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import ListScreen from "./src/screens/listScreen";
import CoinInsight from "./src/screens/coinInsight";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinInsight />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
