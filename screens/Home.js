import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <LinearGradient colors={["#360033", "#0b8793"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Being</Text>
        <Text style={styles.heading}>Longing</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "white",
    paddingTop: 90,
    fontSize: 32,
    fontFamily: "sacramento",
    letterSpacing: 1.5,
  },
  container: {
    marginTop: 130,
  },
});
