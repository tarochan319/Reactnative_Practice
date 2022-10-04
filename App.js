// タスク
// ・画面遷移の実装（下記参照）
//https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./Component/test";

export default function App() {
    return(
        <View style={StyleSheet.container}>
            <Text>タイトル</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});


