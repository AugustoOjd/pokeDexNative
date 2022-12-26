import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SimplePokemon } from '../interfaces/pokeInterface'
import { FadeInImage } from './FadeInImage'
import ImageColors from 'react-native-image-colors'

interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width

const PokemonCard = ({ pokemon }:Props) => {

    const [bgColor, setBgColor] = useState('gray')
    const isMounted = useRef(true)

    const imgColors = async () =>{
        const uri = pokemon.picture

        const result = await ImageColors.getColors(uri, {
          fallback: 'grey',
        })

        switch (result.platform) {
          case 'android':
            // android result properties
            setBgColor(result.dominant || 'grey')
            break
          case 'ios':
            // iOS result properties
            setBgColor(result.background || 'grey') 
            break
          default:
            throw new Error('Unexpected platform key')
        }
    }

    useEffect(() => {
        if(!isMounted.current)return;

        imgColors()
      return () =>{
        isMounted.current = false
      }
    }, [])
    
  return (
    <TouchableOpacity
        activeOpacity={0.8}
    >
        <View style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
            }}>
                <View >
                    <Text style={{
                    ...styles.name
                    }}> 
                        {pokemon.name} 
                    </Text>
                    <Text style={{
                    ...styles.name
                    }}>
                        # { pokemon.id}
                    </Text>
                </View>

        <View style={ styles.pokebolaContainer}>
                
            <Image 
                source={ require('../assets/pokebola-blanca.png')}
                style={ styles.pokebola}
            />
        </View>


        <FadeInImage 
            uri={ pokemon.picture }
            style={ styles.pokemonImage }
        />

        </View>




    </TouchableOpacity>
    // <View>
    //   <Text>{ pokemon.name }</Text>
    // </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola:{
        position: 'absolute',
        width: 100,
        height: 100,
        bottom: -20,
        right: -18,
        opacity: 0.4
    },
    pokemonImage: {
        position: 'absolute',
        width: 100,
        height: 100,
        right: -6,
        bottom: -8
    },
    pokebolaContainer: {
        position: 'absolute',
        overflow: 'hidden',
        width: 100,
        height: 100,
        bottom: 0,
        right: 0,
    }
})