import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Calculator from '../ejdaha_calculator/Calculator';
import ToolsScreen from '../Screens/toolsScreen/ToolsScreen'

const Stack = createStackNavigator();

const ToolsStackNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName = {"Tools"}>
      <Stack.Screen name= "Tools" component = {ToolsScreen}/>
      <Stack.Screen name= "Ejdaha Calculator" component = {Calculator}/>
      
    </Stack.Navigator>
  );
};

export default ToolsStackNavigation;