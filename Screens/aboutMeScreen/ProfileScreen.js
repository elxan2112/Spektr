import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import {styles} from '../../MyStyles/ProfileScreenStyles'
import {smouq} from '../../MyImages'

const ProfileScreen = () => {
    return(
        <View style = {styles.container}>
            <Image source={smouq}></Image>
            <Text style={styles.textStyle}>
                Name: Ejdaha
            </Text>
            <Text style={styles.textStyle}>
                Surname: Shaurma
            </Text>
            <Text style={styles.textStyle}>
                Years: 20
            </Text>
        </View>
    )
}

export default ProfileScreen;