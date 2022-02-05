import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={{ colors: { background: "#121212" } }}>
        <Navigation />
      </NavigationContainer>
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
