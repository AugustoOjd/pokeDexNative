import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            // cardStyle: {
            //     backgroundColor:    'white'
            // }
        }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PokemonScreen" component={PokemonScreen} />

        </Stack.Navigator>
    )
}

export default Navigation