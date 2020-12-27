import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import {WebView} from 'react-native-webview'
import {styles} from '../../MyStyles/NewsStyles'

const NewsScreen = () => {
  return (
      <SafeAreaView style = {{flex: 1}}>
          <View style = {styles.header}>
              <Text style = {styles.headerText}>News</Text>
          </View>
          <WebView source = {{uri: 'https://www.day.az/'}}/>
      </SafeAreaView>
  );
};

export default NewsScreen;