import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text,  } from 'react-native';
import {styles} from '../../MyStyles/EntertainmentScreenStyles';

function EntertainmentScreen({navigation}){
  return (
    <SafeAreaView style ={styles.allArea}>
      <View style = {styles.container}>
        <Text style = {styles.name}>Movie finder</Text>
        <TouchableOpacity onPress = {() => navigation.navigate('movie')} style ={styles.button}>
<Text style ={styles.buttonText}>Open</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EntertainmentScreen;