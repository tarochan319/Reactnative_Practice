import React from "react";
import { StyleSheet, View } from "react-native";
import CampNews from "./Component/CampNews";

// ▼タスク
// API取得から！
// https://youtu.be/28CvBaSsoEI

export default function App() {
  return (
    <View style={styles.container}>
      {/* ▼自作コンポーネントの呼び出し */}
      <CampNews imageuri="" title="てすと" subtext="てすと"></CampNews>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
