import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import GradientBackground from "../components/gradientBackground";
import Ionicons from "react-native-vector-icons/Ionicons";
import HistoryItem from "../components/historyItem";
import { Alert } from "react-native";
import { mainGameStyle } from "../constants/mainGameStyle";
let max = 100;
let min = 0;
let currentGuess;
let i = 0;
let data = [];
let copyData = [];
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min + 1;
}
function MainGameScreen(props) {
  const navigate = () => {
    max = 100;
    min = 0;
    i++;
    while (copyData.length > 0) {
      copyData.pop();
    }
    // clear the history
    data.forEach((element) => {
      data.pop();
    });

    props.navigation.navigate("EndGameScreen", {
      attempts: i,
      number: userResult,
    });
    i = 0;
  };
  const userResult = props.route.params.userNumber;
  const [data, setData] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(randomInt(min, max));
  const handleAlert = () => {
    Alert.alert("Don't lie", "You know that this is not correct. Try again!", [
      {
        text: "Close",
        onPress: () => {
          console.log("Alert closed");
        },
      },
    ]);
  };
  const handleReload = () => {
    setCurrentGuess(randomInt(min, max));
    i++;
    data.push({ name: currentGuess, key: i });
    while (copyData.length > 0) {
      copyData.pop();
    }
    // reverse the array
    data.forEach((element) => {
      copyData.push(element);
    });
    copyData.reverse();
  };
  return (
    <View
      style={StyleSheet.create({
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      })}
    >
      <GradientBackground />
      <SafeAreaView
        style={StyleSheet.create({
          flex: 1,
          alignItems: "center",
        })}
      >
        <Text style={mainGameStyle.header}>Opponent's Guess</Text>
        <View>
          <Text style={mainGameStyle.number}>{currentGuess}</Text>
        </View>

        <Text style={mainGameStyle.instruction}>Higher or Lower</Text>
        <View style={mainGameStyle.iconDiv}>
          <Pressable
            style={mainGameStyle.iconStyle}
            activeOpacity={1}
            onPress={() => {
              if (currentGuess > userResult) {
                max = currentGuess;
                handleReload();
              } else {
                handleAlert();
              }
            }}
          >
            <Ionicons name="remove" size={35} color="white" />
          </Pressable>

          <Pressable
            onPress={() => {
              if (currentGuess < userResult) {
                min = currentGuess;
                handleReload();
              } else {
                handleAlert();
              }
            }}
            style={mainGameStyle.iconStyle}
          >
            <Ionicons name="add" size={35} color="white" />
          </Pressable>
        </View>
        <View style={mainGameStyle.flatListStyle}>
          <FlatList
            style={{ width: "100%" }}
            data={copyData}
            renderItem={({ item }) =>
              HistoryItem({ guess: item.name, key: item.key })
            }
          />
        </View>
        <View style={mainGameStyle.viewStyle}>
          <Pressable
            style={mainGameStyle.button}
            onPress={() => {
              if (currentGuess === userResult) {
                navigate();
              } else {
                handleAlert();
              }
            }}
          >
            <Text style={mainGameStyle.textButton}>Bingo!</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default MainGameScreen;
