import React from "react";
import { View, Text } from "react-native";
import {styles} from '../../MyStyles/SettingsScreenStyles'

export const SettingsScreen = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>
                Burada sizin reklamınız ola bilərdi!
                Ətraflı məlumat üçün ADRA - nə müraciyən edə bilərsiz!
            </Text>
            <Text style = {styles.advText}>
            Или по братски закинь 10 манат на этот номер (077-575-07-65)
            </Text>
        </View>
    )
}
