import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.quote}>"{this.state.body}"</Text>
            <Text style={{ ...styles.quote, ...styles.author }}>
              {this.state.author}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{ ...styles.quote, ...styles.return }}>Return</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    marginTop: 130,
    padding: 15,
  },
  quote: {
    textAlign: "center",
    color: "white",
    fontSize: 34,
    paddingTop: 70,
    fontFamily: "tangerine",
    letterSpacing: 1.5,
  },
  return: {
    fontSize: 28,
  },
  author: {
    fontSize: 28,
    paddingTop: 30,
  },
});
