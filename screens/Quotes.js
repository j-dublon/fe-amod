import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as api from "../utils/api";

export default class Quotes extends Component {
  state = {};

  componentDidMount() {
    const { navigation } = this.props;
    const topic = navigation.getParam("topic");
    api.fetchQuotes(topic).then((data) => {
      this.setState(data);
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient colors={["#360033", "#0b8793"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.quote}>"{this.state.body}"</Text>
          <Text style={{ ...styles.quote, ...styles.author }}>
            {this.state.author}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ ...styles.quote, ...styles.return }}>Return</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
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
  author: {
    fontSize: 28,
    paddingTop: 30,
  },
});
