import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/homeScreen/HomeScreen';
import NewsScreen from '../Screens/newsScreen/NewsScreen';
import ToolsStackNavigation from './ToolsStackNavigations'
import TabNavigation from './TabNavigation';
import EntertainmentStackNavigation from './EntertainmentStackNavigation';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () =>{
  return (
      <Drawer.Navigator initialRouteName = {'Home'}>
        <Drawer.Screen name = "Home" component = {HomeScreen} />
        <Drawer.Screen name = "News" component = {NewsScreen}/>
        <Drawer.Screen name = "Entertainment" component = {EntertainmentStackNavigation}/>
        <Drawer.Screen name = "Tools" component = {ToolsStackNavigation}/>
        <Drawer.Screen name = "About me" component= {TabNavigation} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigator