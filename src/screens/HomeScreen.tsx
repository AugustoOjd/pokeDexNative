import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'

import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import usePokePage from '../hooks/usePokePage'
import { FadeInImage } from '../components/FadeInImage'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

    const {top} = useSafeAreaInsets()

    const {simplePoke, fetchPokes} = usePokePage()
    // console.log(simplePoke)

  return (
    <>
      <Image
        style={ styles.pokebolaBg}
        source={require('../assets/pokebola.png')}
      />

    <View style={{
      ...styles.globalMargin,
      alignItems: 'center'
      }}>

      <FlatList
        data={simplePoke}
        keyExtractor={ (poke) => poke.id}
        renderItem={ ({item}) => (
              <PokemonCard pokemon={item}/>
          )}
        
        // header
        ListHeaderComponent={ (
          <Text style={{
            ...styles.title,
            ...styles.globalMargin,
            top: top + 20,
            marginBottom: top + 20
          }}>
            PokeDex
          </Text>
        ) }

        showsVerticalScrollIndicator={false}
        numColumns={ 2 }
        // infinity scroll

        onEndReached={ fetchPokes }
        onEndReachedThreshold={ 0.4 }

        ListFooterComponent={ <ActivityIndicator size={35} style={{height: 100}}/>}
      />
      
    </View>
    
    </>
  )
}

export default HomeScreen