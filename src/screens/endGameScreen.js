import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { startGameStyle } from "../constants/startGameStyle";
import GradientBackground from "../components/gradientBackground";
const EndGameScreen = (props) => {
    const attempts = props.route.params.attempts;
    const number = props.route.params.number;
  return (
    <SafeAreaView style={endGameScreenStyle.SafeAreaViewStyle}>
      <GradientBackground />
      <Text style={endGameScreenStyle.text}>Game Over!</Text>
      <Image
        source={require("../assets/happy.png")}
        style={startGameStyle.stretch}
      ></Image>
      <View style={startGameStyle.bottomView}>
        <Text style={endGameScreenStyle.congratulations}>
          Well Done! Your phone took {attempts} attempts to guess this number: {number}
        </Text>
        <Pressable
          style={startGameStyle.startButton}
          onPress={() => {
            props.navigation.navigate("EnterNumber");
          }}
        >
          <Text style={startGameStyle.textButton}>New game </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const endGameScreenStyle = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    color: "white",
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
  },
  congratulations: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  }
});
export default EndGameScreen;
