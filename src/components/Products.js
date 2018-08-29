import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';

export default class ProductsScreen extends Component {
    // static navigationOptions = {
    //   drawerLabel: 'Products',
    // //   drawerIcon: ({ tintColor }) => (
    // //     <Image
    // //       source={require('./chats-icon.png')}
    // //       style={[styles.icon, {tintColor: tintColor}]}
    // //     />
    // //   ),
    // };
  
    render() {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button
              title="Go to notifications"
            />
        </View>
        
      );
    }
}