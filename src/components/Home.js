
import React, {Component} from 'react';
import {Alert, ScrollView,StyleSheet,View,Text,DrawerLayoutAndroid,Image,TouchableOpacity,Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
// import ViewScreen from './';
import ProductsScreen from './Products';
const categoriesData = [
    {
        id: 1,
        name: "Electronics",
        subcategory: [
            {
                id: 1,
                name : "Mobile Accessories",
                subcategory: [
                    {
                        id: 1,
                        name : "Cases, Covers & Screen Guards",
                        subcategory: [
                            {
                                id: 1,
                                name : "Sports & Nutrition",
                                subcategory: [
                                    {
                                        id: 1,
                                        name : "Sports",
                                        subcategory: []
                                    },
                                    {
                                        id: 2,
                                        name : "Fitness",
                                        subcategory: []
                                    },
                                    {
                                        id: 3,
                                        name : "Health & nutrition",
                                        subcategory: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name : "Power Banks",
                        subcategory: []
                    },
                    {
                        id: 3,
                        name : "HeadPhones",
                        subcategory: []
                    },
                    {
                        id: 4,
                        name : "Memory Cards",
                        subcategory: []
                    },
                ]
            },
            {
                id: 2,
                name : "Televisions",
                subcategory: []
            },
        ]
    },
    {
        id: 2,
        name: "Fashion",
        subcategory: [
            {
                id: 1,
                name : "Men",
                subcategory: [
                    {
                        id: 1,
                        name : "Footwear",
                        subcategory: []
                    },
                    {
                        id: 2,
                        name : "Clothing",
                        subcategory: []
                    },
                    {
                        id: 3,
                        name : "Watches",
                        subcategory: []
                    },
                    {
                        id: 4,
                        name : "Eyewear",
                        subcategory: []
                    },
                ]
            },
            {
                id: 2,
                name : "Women",
                subcategory: []
            },
        ]
    },
    {
        id: 3,
        name: "Sports,Books & More",
        subcategory: [
            {
                id: 1,
                name : "Sports & Nutrition",
                subcategory: [
                    {
                        id: 1,
                        name : "Sports",
                        subcategory: []
                    },
                    {
                        id: 2,
                        name : "Fitness",
                        subcategory: []
                    },
                    {
                        id: 3,
                        name : "Health & nutrition",
                        subcategory: []
                    }
                ]
            },
            {
                id: 2,
                name : "Books",
                subcategory: []
            },
        ]
    },
    {
        id: 4,
        name: 'Childrens',
        subcategory: []
    }
];



export default class Home extends Component {
    categoriesData = require('../datasets/categories');
    static navigationOptions = ({ navigation }) => ({
        title: 'Flipkart',
        headerTitleStyle: {
            textAlign: 'left',
            fontSize: 20,
            color: 'white',
            flex:1
        },
        headerTintColor:'white',
        headerStyle: {
            height: 55,
            backgroundColor: '#5D7ED3',
        },
        headerLeft: (
            <TouchableOpacity onPress={()=>{
                    if(_this.isOpen){
                        _this.closeDrawer()
                    }else
                        _this.openDrawer()
                    }
                }>
            <View>
                <Icon name='menu' style={{color: '#fff',fontSize:30,marginLeft: 10}} />
            </View>
        </TouchableOpacity>),

        headerRight: (<View/>)
    });
    state ={
        categoriesList: []
    }
    _this;
    isOpen=false;
    componentDidMount(){
        _this=this;
        this.setState({categoriesList: categoriesData[0].subcategory});
        console.warn("heya",this.categoriesData);
    }

    openDrawer(){
        this.DrawerLayoutRef.openDrawer();
        this.isOpen=!this.isOpen

    }

    closeDrawer(){
        this.DrawerLayoutRef.closeDrawer();
        this.isOpen=!this.isOpen
    }
   
    render() {
        console.warn("hello",this.categoriesData);
        var drawerMenuList=(
            <View>
                    <FlatList
                        data={categoriesData}
                        renderItem={({ item })=>(
                            <View>
                                <Text   style={styles.textStyle} 
                                         onPress={() => {
                                             if(item.subcategory.length===0){
                                                 Alert.alert('No Categories');
                                             }else{
                                                if(_this.isOpen){
                                                      _this.closeDrawer()
                                                    }else {
                                                        _this.openDrawer();
                                                    }
                                                 this.setState({categoriesList: item.subcategory});
                                                   
                                             }
                                          }}>{item.name}</Text>
                            </View>
                    )}
                    />    
            </View>
        )

       return (
            <DrawerLayoutAndroid
              ref={ref => (this.DrawerLayoutRef = ref)}
              drawerWidth={200}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => drawerMenuList}>
              <View> 
                <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                    <FlatList
                        data={this.state.categoriesList}
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
              </View>
            </DrawerLayoutAndroid>
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
      scrollViewStyle:{
        paddingTop: 10,
        paddingBottom: 100
    },
  });
