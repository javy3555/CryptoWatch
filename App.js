import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}} 
      style={{height: 35, width: 35}}/>
      <Text style={styles.title}>Bitcoin</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
