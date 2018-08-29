
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import ProductsScreen from './src/components/Products';
import ViewScreen from './src/components/View';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  render() {
      console.warn(this.props);
      return <RootStack />;
  }
}
const RootStack = createStackNavigator({
    Home: {
      screen: Home
    },
    Products: {
      screen: ProductsScreen,
    },
    View: {
      screen: ViewScreen,
    },
});
