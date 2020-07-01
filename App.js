import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    sacramento: require("./assets/fonts/Sacramento-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <LinearGradient colors={["#360033", "#0b8793"]} style={{ flex: 1 }}>
        <View>
          <Text style={styles.title}>A Multitude of Drops</Text>
        </View>
      </LinearGradient>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "white",
    paddingTop: 50,
    fontSize: 32,
    fontFamily: "sacramento",
  },
});
