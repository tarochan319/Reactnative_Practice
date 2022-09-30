// In App.js in a new project

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

export default function App() {
  return (
    <View style={styles.title}>
      <Text>おやじの言葉</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Title" component={TitleScreen} />
//         <Stack.Screen name="Top" component={TopScreen} />
//         <Stack.Screen name="Meigen" component={MeigenScreen} />
//         <Stack.Screen name="ToDo" component={ToDoScreen} />
//         <Stack.Screen name="Complete" component={CompleteScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
