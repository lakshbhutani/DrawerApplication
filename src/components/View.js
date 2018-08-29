import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button, ScrollView, FlatList} from 'react-native';

export default class ViewScreen extends Component {

    render() {
      return (
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                    <FlatList
                        data={this.props.navigation.state.params.itemSubcategory}
                        renderItem={({ item })=>(
                            <View>
                                <Text   style={styles.textStyle} 
                                        onPress ={()=>{
                                            if(item.subcategory.length===0){
                                                console.warn(this.props);
                                                this.props.navigation.navigate('Products');
                                            }else {
                                                this.props.navigation.push('View',
                                                {itemSubcategory: item.subcategory});
                                            }
                                        }}>{item.name}</Text>
                            </View>)}
                    />    
          </ScrollView>
      );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#fff'
    },
    textStyle:{
        padding:10,
        fontSize:14,
        color:'#4a4a4a',
        borderWidth:0.3,
        borderColor:'#ccc'
      },
  });