
import React, { useEffect, useRef, useState } from 'react'
import { PokemonPaginateResp, Result, SimplePokemon } from '../interfaces/pokeInterface'

const usePokePage = () => {

  // const url = 'https://pokeapi.co/api/v2/pokemon?limit=40'

  const [simplePoke, setSimplePoke] = useState<SimplePokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const fetchPokes = async () =>{

    setIsLoading(true)
    const resp = await fetch(nextPageUrl.current)
    const data: PokemonPaginateResp = await resp.json()
    nextPageUrl.current = data.next
    mapPokemonList(data.results)

  }

  const mapPokemonList = (pokemonList: Result[]) =>{
    
    const newPokemonList: SimplePokemon[] = pokemonList.map( ({name, url}) => {
      
      // 'https://pokeapi.co/api/v2/pokemon/12/'
      const urlParts    = url.split('/')
      const id          = urlParts[ urlParts.length - 2]
      const urlPicture  = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

      return {
        id,
        picture: urlPicture,
        name
      }

    }) 

    setSimplePoke([...simplePoke, ...newPokemonList])
    setIsLoading(false)
  }


  useEffect(() => {
    fetchPokes()
  }, [])
  

  return {
    simplePoke,
    isLoading,
    fetchPokes
  }
}

export default usePokePage