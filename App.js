import React, {Component} from 'react';
import { SafeAreaView,  View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigations/DrawerNavigation';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  render(){
    return(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer> 
    )
  }
}

export default App;