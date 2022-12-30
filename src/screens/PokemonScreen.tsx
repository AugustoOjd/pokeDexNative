import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RooStackParams } from '../Navigation/Tab1'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';


interface Props extends StackScreenProps<RooStackParams, 'PokemonScreen'> {

}

const PokemonScreen = ({ navigation, route }: Props) => {
  
  const {simplePokemon, color} = route.params
  const { id, name, picture} = simplePokemon

  const {top} = useSafeAreaInsets()
  const {isLoading, pokemon } = usePokemon(id)
  // console.log(pokemon)

  return (
    <View style={{flex: 1}}>

      <View style={{
        ...styles.pokeContainer,
        backgroundColor: color
      }}>

        <TouchableOpacity
          onPress={()=> navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backBtn,
            top: top + 10
          }}
        >
          <Icon 
            name='arrow-back-outline'
            color={'white'}
            size={35}
          />

        </TouchableOpacity>

          {/* Nombre de pokemon */}
        <Text style={{
          ...styles.pokemonName,
          top: top + 5}}> 
          { name } #{id}
        </Text>

        {/* Pokebola blanca */}

          <Image 
            source={ require('../assets/pokebola-blanca.png')}
            style={{
              ...styles.pokeballWhite
            }}
          />

          <FadeInImage
              uri={ picture }
              style={ styles.imageStyle}
            />
    </View>

        {
            isLoading 
            ?
            (
            <View style={ styles.loadingIndicator }>
              <ActivityIndicator
                color={color}
                size={50}
              />
            </View>
            )
            :
            <PokemonDetails pokemon={pokemon}/>
            
            }


    </View>
  )
}


const styles = StyleSheet.create({
  pokeContainer: {
    // height: 320,
    zIndex: 999,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backBtn: {
    width: 50, 
    left: 15,
  },
  pokemonName: {
    marginLeft: 10,
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start'
  },
  pokeballWhite: {
    alignSelf: 'center',
    height: 220,
    width: 220,
    opacity: 0.6
  },
  imageStyle: {
    position: 'absolute',
    height: 250,
    width: 250,
    bottom: -20,
    alignSelf: 'center'
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  }
})

export default PokemonScreen