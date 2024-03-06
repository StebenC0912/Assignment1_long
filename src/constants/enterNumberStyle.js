import { StyleSheet } from "react-native";

export const enterNumberStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  safeAreaViewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  topText: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    margin: 20,
    fontWeight: "bold",
  },
  inputStyle: {
    fontSize: 128, // Adjust font size as needed
    color: "white",
    paddingVertical: 10,
    borderColor: "white",
    borderBottomWidth: 6,
    width: 180,
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  rightButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#540992 ",
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  rightButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  leftButton: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  textButtonLeft: {
    fontSize: 24,
    color: "#540992",
    fontWeight: "bold",
  },
});

