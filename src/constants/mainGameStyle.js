import { StyleSheet } from "react-native";

export const mainGameStyle = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
  },
  number: {
    fontSize: 128,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    borderColor: "white",
    borderBottomWidth: 6,
  },
  instruction: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    marginTop: 35,
    marginBottom: 35,
  },
  iconDiv: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  iconStyle: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#540992 ",
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  flatListStyle: { flex: 1, width: "90%" },
  viewStyle: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  textButton: {
    fontSize: 24,
    color: "#540992",
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",

  },
});
