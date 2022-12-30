import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void
    style?: StyleProp<ViewStyle>
}

const SearchInput = ({ style, onDebounce }:Props) => {

    const [textValue, setTextValue] = useState('')

    // console.log(textValue)
    const debounceValue = useDebouncedValue( textValue )

    useEffect(() => {
      
        onDebounce(debounceValue)
      
    }, [debounceValue])
    

  return (
    <View style={{
        ...styles.container,
        ...style as any
        }}>
        <View style={styles.textBackground}>
            
            <TextInput
                placeholder='Buscar Poke'
                autoCapitalize='none'
                autoCorrect={false}
                style={ styles.textInput}
                value={textValue}
                onChangeText={ setTextValue }
            />

            <Icon 
                name='search-outline'
                color={'black'}
                size={20}
            />
        </View>

    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 45, 
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    },
    textInput: {
        flex: 1, 
        fontSize: 18
    }

})