import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/aboutMeScreen/ProfileScreen';
import {SettingsScreen} from '../Screens/aboutMeScreen/SettingsScreen';

export const Tab = createBottomTabNavigator();

function TabNavigation({navigation}){
    return(
            <Tab.Navigator initialRouteName = "Profile"
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: {fontSize: 30},
                }}>
                    <Tab.Screen name = "Profile" component = {ProfileScreen}/>
                    <Tab.Screen name = "Settings" component = {SettingsScreen}/>
            </Tab.Navigator>
    )
}

export default TabNavigation;