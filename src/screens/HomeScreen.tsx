import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'

import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import usePokePage from '../hooks/usePokePage'

const HomeScreen = () => {

    const {top} = useSafeAreaInsets()

    const {simplePoke, fetchPokes} = usePokePage()
    console.log(simplePoke)

  return (
    <>
      <Image
        style={ styles.pokebolaBg}
        source={require('../assets/pokebola.png')}
      />

    <View style={styles.globalMargin}>

      <FlatList
        data={simplePoke}
        keyExtractor={ (poke) => poke.id}
        renderItem={ ({item}) => (
        
          <Image
            source={{ uri: item.picture}}
            style={{ width: 100, height: 100}}
          />
          )}
        showsVerticalScrollIndicator={false}
        // infinity scroll

        onEndReached={ fetchPokes }
        onEndReachedThreshold={ 0.4 }

        ListFooterComponent={ <ActivityIndicator size={35} style={{height: 100}}/>}
      />
      
    </View>
      {/* <Text style={ {
        ...styles.title,
        top: top + 20
        }}>Poke Dex</Text> */}

    </>
  )
}

export default HomeScreen