import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { SimplePokemon } from '../interfaces/pokeInterface';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

export type RooStackParams = {
    HomeScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string}
} 

const Stack = createStackNavigator<RooStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator
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