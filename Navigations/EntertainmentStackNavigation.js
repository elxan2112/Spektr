import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EntertainmentScreen from '../Screens/entertainmentScreen/EntertainmentScreen';
import MovieFinder from '../ejdaha_movies/MovieFinder'

const Stack = createStackNavigator();

const EntertainmentStackNavigation = ({navigation}) => {

    return(
        <Stack.Navigator initialRouteName = {"Entertainment"}>
            <Stack.Screen name= "Entertainments" component = {EntertainmentScreen}/>
            <Stack.Screen name= "movie" component = {MovieFinder}/>
            
        </Stack.Navigator>
    )
}

export default EntertainmentStackNavigation;