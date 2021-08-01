import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SearchScreen from './screens/searchScreen';
import TransactionScreen from './screens/bookTransactionScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component () {
  render(){
  return (
    <AppContainer/>
  );
  }
}

const tabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen}, 
  
  Search : {screen : SearchScreen},

},
)
{
  defaultNavigationOptions : ({navigation})=> {
    tabBarIcon : ({})=> {
      const routeName = navigation.state.routeName
      if(routeName === 'Transaction'){
        return (
          <Image 
           source = {require('./assets/book.png')} 
           style = {{width: 30 , height : 30}} />
        )
      }
      else if(routeName === 'Search'){
        return(
          <Image
           source = {require('./assets/searchingbook.png')} 
           style = {{width: 30 , height : 30}} />
        )
      }
    }
  }
}




const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'purple',
      alignItems : 'center',
      justifyContent : 'center', 
    },
});