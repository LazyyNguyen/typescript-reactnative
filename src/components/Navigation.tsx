import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Homepage from '../screens/Homepage/Homepage'
import FollowUs from '../screens/components/FollowUs'
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#4157FF',

      }}
    >
      <Tab.Screen

        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
            <Tab.Screen

name="FollowUs"
component={FollowUs}
options={{
  tabBarLabel: 'FollowUs',
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="bell" color={color} size={size} />
  ),
  // headerShown: false,
}}
/>
    </Tab.Navigator>
    </>
  );
}
export default Navigation;