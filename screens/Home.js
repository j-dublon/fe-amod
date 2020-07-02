import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  return (
    <LinearGradient colors={["#360033", "#0b8793"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Quotes")}>
          <Text style={styles.heading}>Being</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Quotes")}>
          <Text style={styles.heading}>Longing</Text>
        </TouchableOpacity>
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
