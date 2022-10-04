import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Tesxt, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}></View>
        <View style={styles.image}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    height: 100,
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
  },

  title: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  image: {
    width: 100,
    backgroundColor: "black",
  },
});
