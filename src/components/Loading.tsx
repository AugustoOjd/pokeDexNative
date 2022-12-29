import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={ styles.activityContainer}>
        <ActivityIndicator
            size={50}
        />
    
        <Text>Cargando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        // backgroundColor: 'gray'
    },
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading