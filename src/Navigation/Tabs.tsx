import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import Navigation from './Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return (
    <Tab.Navigator
        // sceneContainerStyle={{
        //     backgroundColor:'red'
        // }}
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderWidth: 0,
            elevation: 0,
            height: 60,
        }
    }}

    >
      <Tab.Screen 
        name="Navigation" 
        component={Navigation} 
        options={{
            tabBarLabelStyle:{
                fontSize: 13,
                marginBottom: 5
            },
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => <Icon color={color} name='list-outline' size={22} />
            }} 
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{
            tabBarLabelStyle:{
                fontSize: 13,
                marginBottom: 5
            },
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => <Icon color={color} name='search-outline' size={22} />
            }} 
        />
    </Tab.Navigator>
  );
}

export default Tabs