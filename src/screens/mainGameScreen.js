import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import GradientBackground from "../components/gradientBackground";
import Ionicons from "react-native-vector-icons/Ionicons";
import { enterNumberStyle } from "../constants/enterNumberStyle";
const MainGameScreen = (props) => {
  return (
    <View style={enterNumberStyle.mainContainer}>
      <GradientBackground />
      <SafeAreaView style={enterNumberStyle.safeAreaViewStyle}>
        <Text style={enterNumberStyle.topText}>Opponent's Guess</Text>
        <Text>22</Text>
        <Text>Higher or Lower</Text>
        <View>
          <Ionicons name="md-remove" size={24} color="black" />
          <Ionicons name="md-add" size={24} color="black" />
        </View>
        <Pressable></Pressable>
      </SafeAreaView>
    </View>
  );
};

export default MainGameScreen;
