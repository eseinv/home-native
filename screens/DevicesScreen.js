import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function DevicesScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

DevicesScreen.navigationOptions = {
  title: "Devices"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
