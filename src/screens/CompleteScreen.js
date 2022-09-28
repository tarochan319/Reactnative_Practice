// 【コンプリートページ】

import * as React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CompleteScreen = () => {
  return (
    <TouchableOpacity style={style.midashi} onPress={onPress}>
      <View>
        <Text>こんぷりーとぺーじ</Text>
      </View>
    </TouchableOpacity>
  );
};

// ▼CSSは以下に記載
const style = StyleSheet.create({
  midashi: {},
});

export default CompleteScreen;
