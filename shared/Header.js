import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>A Multitude of Drops</Text>
      </View>
    </View>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 38,
    fontFamily: "tangerine",
    color: "white",
    letterSpacing: 1.5,
  },
});
