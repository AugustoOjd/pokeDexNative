import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const {top} = useSafeAreaInsets()

  return (
    <View style={styles.globalMargin}>
      <Image
        style={ styles.pokebolaBg}
        source={require('../assets/pokebola.png')}
      />
      <Text style={ {
        ...styles.title,
        top: top + 20
        }}>Poke Dex</Text>
    </View>
  )
}

export default HomeScreen