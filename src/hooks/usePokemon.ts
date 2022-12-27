import { useEffect, useState } from "react"
import { PokemonFull } from "../interfaces/pokeInterface"


export const usePokemon = (id: string) =>{

    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonFull>( {} as PokemonFull )

    const loadPokemon = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data: PokemonFull = await resp.json()

        setPokemon(data)
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])
    



    return {
        isLoading,
        pokemon
    }
}