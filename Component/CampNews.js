import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// ▼自作コンポーネントCampNewsを作成
const NewsInfo = ({ imageuri, title, subtext }) => {
  return (
    <View style={styles.box}>
      <View style={styles.title_box}>
        <Text style={styles.midashi}>{title}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
      <View style={styles.image_bpx}>
        <Image
          source={{
            uri: imageuri,
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
};

export default NewsInfo;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
  },

  title_box: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "space-between",
  },

  image_bpx: {
    width: 100,
    backgroundColor: "black",
  },

  midashi: {
    fontSize: 16,
    fontWeight: "bold",
  },

  subtext: {
    fontSize: 12,
  },
});
