import React from "react";
import { View, Button, Text,  Image } from "react-native";
import styles from '../../MyStyles/HomeScreenStyles'
import {Spektr_Logo} from '../../MyImages'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mainContentImg}>
          <Image source={Spektr_Logo} style={styles.logoImg}/>
        </View>
        <View style={styles.mainContentText}>
          <Text style={styles.mainText}>
            Welcome to the best application in the world!
            We are glad to see you!
          </Text>
        </View>
        <View style={styles.mainInfoText}>
            <Text style={styles.infoText}>
              Swipe from left to right to view our menu!!!
            </Text>
        </View>
    </View>
  );
};



export default HomeScreen;