import React, { useState, useRef } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import GradientBackground from "../components/gradientBackground";
import { SafeAreaView } from "react-native-safe-area-context";
import { enterNumberStyle } from "../constants/enterNumberStyle";
function EnterNumber(props) {
  const [number, setNumber] = useState("");
  const numberInputRef = useRef(null);
  const resetInputHandler = () => {
    numberInputRef.current.clear();
    console.log("Reset");
  };
  const startGame = () => {
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber >= 100) {
        console.log({parsedNumber})
      alert("Please insert a number between 1 and 99");
    } else {
      numberInputRef.current.clear();
      props.navigation.navigate("MainGameScreen", {
        userNumber: parsedNumber,
      });
    }
  };
  return (
    <View style={enterNumberStyle.mainContainer}>
      <GradientBackground />
      <SafeAreaView style={enterNumberStyle.safeAreaViewStyle}>
        <Text style={enterNumberStyle.topText}>Enter a Number</Text>
        <TextInput
          ref={numberInputRef}
          keyboardType="numeric"
          style={enterNumberStyle.inputStyle}
          onChangeText={(e) => setNumber(e)}
        />
        <View style={enterNumberStyle.bottomView}>
          <Pressable
            style={enterNumberStyle.rightButton}
            onPress={resetInputHandler}
          >
            <Text style={enterNumberStyle.rightButtonText}>Reset</Text>
          </Pressable>
          <Pressable
            style={enterNumberStyle.leftButton}
            onPress={startGame}
          >
            <Text style={enterNumberStyle.textButtonLeft}>Start</Text>
          </Pressable>
        </View>
      </SafeAreaView> 
    </View>
  );
}

export default EnterNumber;
