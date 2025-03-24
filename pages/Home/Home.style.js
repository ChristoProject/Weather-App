import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 40,
  },

  location: {
    height: "auto",
    flexDirection: "column",
    marginBottom: 10,
  },

  meteoInfo: {
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  search: {
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "start",
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },

  forecast: {
    height: "200",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },

  forecastContent: {
    flexDirection: "column",
    alignItems: "center",
  },

  bonusInfo: {
    height: "auto",
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },

  bonusContent: {
    flexDirection: "column",
    alignItems: "center",
  },
});
