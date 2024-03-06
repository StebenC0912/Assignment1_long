import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { startGameStyle } from "../constants/startGameStyle";
import GradientBackground from "../components/gradientBackground";
const WelcomeScreen = (props) => {
  return (
    <View style={startGameStyle.mainContainer}>
      <GradientBackground />
      <Image
        source={require("../assets/game.png")}
        style={startGameStyle.stretch}
      ></Image>
      <View style={startGameStyle.bottomView}>
        <Text style={startGameStyle.text}>Guess {"\n"}The Number</Text>
        <Pressable
          style={startGameStyle.startButton}
          onPress={() => {
            props.navigation.navigate("EnterNumber");
          }}
        >
          <Text style={startGameStyle.textButton}>Start game </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
