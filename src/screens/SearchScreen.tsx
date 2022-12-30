import { StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokeInterface';


const screenWith = Dimensions.get('window').width

const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const {isFetching, simplePoke} = usePokemonSearch()
    const [term, setTerm] = useState('')
    const [pokemonfiltered, setPokemonfiltered] = useState<SimplePokemon[]>([])


    useEffect(() => {
      
      if(term.length === 0){
        return setPokemonfiltered([])
      }

      if( isNaN( Number(term))){
        setPokemonfiltered(
          simplePoke.filter( 
            (poke) => poke.name.toLowerCase().includes( term.toLowerCase() ))
        )
      }else{
        const pokemonById = simplePoke.find( (poke)=> poke.id === term)
        setPokemonfiltered( 
          ( pokemonById) ? [pokemonById] : []
        )
      }


    
      return () => {
        
      }
    }, [term])
    

    if( isFetching ){
        return <Loading/>
    }

  return (
    <View style={{
        flex: 1,
        marginHorizontal: 20,
        }}>
      
        <SearchInput 
            onDebounce={ (value) => setTerm( value)}
            style={{
            position: 'absolute',
            zIndex: 999,
            width: screenWith - 40,
            top: (Platform.OS === 'ios') ? top : top + 15
        }}/>

        <FlatList
        data={pokemonfiltered}
        keyExtractor={ (poke) => poke.id}
        renderItem={ ({item}) => (
              <PokemonCard pokemon={item}/>
          )}
        
        // header
        ListHeaderComponent={ (
          <Text style={{
            ...styles.title,
            ...styles.globalMargin,
            marginTop: (Platform.OS === 'ios') ? top + 70 : top + 80,
            marginBottom: 10
          }}>
            { term }
          </Text>
        ) }

        showsVerticalScrollIndicator={false}
        numColumns={ 2 }


      />
    </View>
  )
}

export default SearchScreen
