import { StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';


const screenWith = Dimensions.get('window').width

const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const {isFetching, simplePoke} = usePokemonSearch()

    if( isFetching ){
        return <Loading/>
    }

  return (
    <View style={{
        flex: 1,
        marginHorizontal: 20,
        }}>
      
        <SearchInput style={{
            position: 'absolute',
            zIndex: 999,
            width: screenWith - 40,
            top: (Platform.OS === 'ios') ? top : top + 15
        }}/>

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
            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 60
          }}>
            PokeDex
          </Text>
        ) }

        showsVerticalScrollIndicator={false}
        numColumns={ 2 }


      />
    </View>
  )
}

export default SearchScreen
