import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CampNews from "./Component/CampNews";
import Constants from "expo-constants";
import axios from "axios";

const URI = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function App() {
  const [news, setNews] = useState([]);

  // 1.画面表示でuseEffectが動く
  useEffect(() => {
    getNews();
  }, []);

  // 2.axiosを使ってAPI実行
  const getNews = async () => {
    const response = await axios.get(URI);
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList>
        data={news}
        renderItem ={" "}
        {({ item }) => (
          // ▼CampNewsは自作コンポーネント
          <CampNews>
            imageuri= {item.urIToImage}
            title= {item.title}
            subtext= {item.publishedAt}
          </CampNews>
        )}
        keyExtractor={(item, index) => index.toString()}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
