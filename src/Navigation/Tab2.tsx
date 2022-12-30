import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import PokemonScreen from "../screens/PokemonScreen";
import SearchScreen from "../screens/SearchScreen";
import { RooStackParams } from "./Tab1";




const Tab2 = createStackNavigator<RooStackParams>();

const Tab2Screen = () => {
    return (
        <Tab2.Navigator
        screenOptions={{
            headerShown: false,
            // cardStyle: {
            //     backgroundColor:    'white'
            // }
        }}
        >
          <Tab2.Screen name="SearchScreen" component={SearchScreen} />
          <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />

        </Tab2.Navigator>
    )
}

export default Tab2Screen