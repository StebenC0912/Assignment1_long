import { StyleSheet } from "react-native";

export const startGameStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
  },
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: "100%",
    height: "50%",
  },
  text: {
    fontSize: 48,
    alignContent: "flex-end",
    color: "white",
    fontWeight: "bold",
  },
  startButton: {
    borderRadius: 8,
    padding: 10,
    marginBottom : 20,
    elevation: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 24,
    color: "#540992",
    fontWeight: "bold",
  },
  bottomView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "left",
    padding: 20,
  },
});
