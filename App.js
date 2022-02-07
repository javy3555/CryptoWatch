import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import WatchlistProvider from "./src/contexts/WatchlistContext";
import { RecoilRoot } from "recoil";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <NavigationContainer theme={{ colors: { background: "#121212" } }}>
      <RecoilRoot>
        <WatchlistProvider>
          <View style={styles.container}>
            <Navigation />
            <StatusBar style="light" />
          </View>
        </WatchlistProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
