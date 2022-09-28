import * as React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const TitleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>おやじの言葉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    // fontStyle:,
  },
});

export default TitleScreen;
