import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as routes from './routes';




import React,{FunctionComponent} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';

import ProductDetail from '../components/ProductDetail/ProductDetail';
import Homepage from '../screens/Homepage/Homepage';
import FollowUs from '../screens/components/FollowUs';
import { AllProducts } from '../screens/components/AllProducts';
import AddProductScreen from '../components/AddProduct/AddProductScreen';
import Cart from '../screens/Cart/Cart'



interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onPress?: any;
}
const MyButton: React.FC<IButtonProps> = ({ onPress, children, ...props }) => {
  return (
      <TouchableOpacity 
      {...props}
      onPress={onPress}>
        <View
        style={{ width:50, height:50, borderRadius:35,
        backgroundColor: '#e32f45', justifyContent: 'center',alignItems:'center'}}

        >
          {children}
        </View>
      </TouchableOpacity>
  );
};


const{ width, height} = Dimensions.get('screen')

const Tab = createBottomTabNavigator();

interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onPress?: any;
}


export function Navigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            width: width,
            backgroundColor: '#ffffff',
            height: 60,
            ...styles.shadow
          }
        }}
        initialRouteName="ProductDetail"
      >
        <Tab.Screen
          name="Home"
          component={Homepage}

          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Image
                  source={require('../../assets/images/fashion/icons/menu.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
         name="AllProducts"
         component={AllProducts}
         options={{
          tabBarLabel: () => { return null },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
              <Image
                source={require('../../assets/images/fashion/icons/fashion.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
            </View>
          ),
        }}
        />
        <Tab.Screen
        name="AddPost"
        component={AddProductScreen}
        options={{
          tabBarLabel: () => { return null },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Image
                source={require('../../assets/images/fashion/icons/plus.png')}
                resizeMode='contain'
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#fff'
                }}
              />
            </View>
          ),
          tabBarButton:(props) => (
            <MyButton {...props}/>
          )
        }}
        />
        <Tab.Screen
          name="FollowUs"
          component={FollowUs}
          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center',}}>
                <Image
                  source={require('../../assets/images/fashion/icons/search.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Image
                  source={require('../../assets/images/fashion/icons/bag.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen name="ProductDetail" component={ProductDetail} options={{
      tabBarButton: (props) => null, //like this
    }}/>
      </Tab.Navigator>
    </>
  );
}
export default Navigation;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})