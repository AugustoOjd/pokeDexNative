import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokeInterface';
import { FadeInImage } from './FadeInImage';
import PokeTypeCard from './PokeTypeCard';

interface Props {
    pokemon: PokemonFull;
}

const PokemonDetails = ({ pokemon }: Props ) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={ false }
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >

            {/* Types y peso */}
            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style={ styles.title }>Types</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {
                    pokemon.types.map( ({ type }) => (
                        <PokeTypeCard type={type.name } key={type.name}/>
                    ))
                }
                </View>

                {/* Peso */}
                <Text style={ styles.title }>Peso</Text>
                <Text style={ styles.regularText }>{ pokemon.weight } lbs</Text>

            </View>

            {/* Types */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Sprites</Text>
            </View>
            
            <ScrollView
                // style
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            >
                <FadeInImage 
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />

                <FadeInImage 
                    uri={ pokemon.sprites.back_default }
                    style={ styles.basicSprite }
                />

                <FadeInImage 
                    uri={ pokemon.sprites.front_shiny }
                    style={ styles.basicSprite }
                />

                <FadeInImage 
                    uri={ pokemon.sprites.back_shiny }
                    style={ styles.basicSprite }
                />
            </ScrollView>


            {/* Habilidades */}
            <View style={ styles.container }>
                <Text style={ styles.title }>Habilidades base</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <PokeTypeCard type={ ability.name } key={ability.name} />
                    ))
                }
                </View>
            </View>

             {/* Habilidades */}
             {/* <View style={ styles.container }>
                <Text style={ styles.title }>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text
                            style={{ 
                                ...styles.regularText,
                                marginRight: 10
                            }}
                            key={ move.name }
                        >
                            { move.name }
                        </Text>
                    ))
                }
                </View>
            </View> */}


            {/* Stats */}
            <View style={ {
                ...styles.container,
                backgroundColor: 'white',
                marginTop: 25,
                marginBottom: 50,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,

                } }>
                <Text style={ styles.title }>Stats: </Text>
                <View>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View 
                            key={ stat.stat.name + i }
                            style={{ flexDirection: 'row' }}
                        >
                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}
                                key={ stat.stat.name }
                            >
                                { stat.stat.name }
                            </Text>

                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    fontWeight: 'bold'
                                }}
                            >
                                { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
                </View>


                {/* Sprite final */}
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <FadeInImage 
                        uri={ pokemon.sprites.front_default }
                        style={ styles.basicSprite }
                    />
                </View>


            </View>


        </ScrollView>
    )
}

export default PokemonDetails


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});