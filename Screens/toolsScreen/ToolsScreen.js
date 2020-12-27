import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import {styles} from '../../MyStyles/ToolsScreenStyles'

function ToolsScreen({navigation}) {
  return (
    <SafeAreaView style ={styles.allArea}>
      <View style = {styles.container}>
        <Text style = {styles.name}>Calculator</Text>
        <TouchableOpacity onPress = {() => navigation.navigate('Ejdaha Calculator')} style ={styles.button}>
<Text style ={styles.buttonText}>Open</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ToolsScreen;