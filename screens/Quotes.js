import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Quotes({ navigation }) {
  return (
    <LinearGradient colors={["#360033", "#0b8793"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.quote}>Quotes Screen</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ ...styles.quote, ...styles.return }}>Return</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
  },
  quote: {
    textAlign: "center",
    color: "white",
    fontSize: 32,
    paddingTop: 90,
    fontFamily: "sacramento",
    letterSpacing: 1.5,
  },
  return: {
    fontSize: 24,
  },
});
