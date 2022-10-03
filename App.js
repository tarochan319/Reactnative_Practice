// タスク
// ・画面遷移の実装（下記参照）
//https://fintan-contents.github.io/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/

import "react-native-gesture-handler";
import * as React from "react"; //必要
import { StyleSheet, View, Text } from "react-native"; //コンポーネント読み込み
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TitleScreen from "../oyaji_project/src/screens/TitleScreen";
import TopScreen from "../oyaji_project/src/screens/TopScreen";
import MeigenScreen from "../oyaji_project/src/screens/MeigenScreen";
import ToDoScreen from "../oyaji_project/src/screens/ToDoScreen";
import CompleteScreen from "../oyaji_project/src/screens/CompleteScreen";

const Stack = createStackNavigator();


