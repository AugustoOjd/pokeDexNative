import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface Props {
    type: string,
}

const PokeTypeCard = ({ type }:Props) => {
  return (
    <View >
      <Text style={{
        ...styles.regularText,
        // backgroundColor: bgColor
        }}>{ type } </Text>
    </View>
  )
}

export default PokeTypeCard

const styles = StyleSheet.create({
    regularText:{
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 20,
        marginRight: 30,
    }
})