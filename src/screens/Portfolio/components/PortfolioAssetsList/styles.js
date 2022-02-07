import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  currentBalance: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
  },
  currentBalanceValue: {
    color: "white",
    fontSize: 37,
    fontWeight: "700",
    letterSpacing: 1,
  },
  valueChange: {
    fontSize: 15,
    fontWeight: "600",
  },
  percentageChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  priceChangePercenterContainer: {
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
  },
  assetsLabel: {
    color: "white",
    fontSize: 23,
    fontWeight: "700",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#4169E1",
    padding: 10,
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default styles;
