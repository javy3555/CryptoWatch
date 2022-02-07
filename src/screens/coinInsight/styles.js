import { StyleSheet } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  priceContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceStyle: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceChangeStyle: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  nameStyle: {
    color: "white",
    fontSize: 15,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  filerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2B2B2B",
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default styles;
