
import React, { useEffect, useRef, useState } from 'react'
import { PokemonPaginateResp, Result, SimplePokemon } from '../interfaces/pokeInterface'

const usePokemonSearch = () => {

  // const url = 'https://pokeapi.co/api/v2/pokemon?limit=40'

  const [simplePoke, setSimplePoke] = useState<SimplePokemon[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1200'

  const fetchPokes = async () =>{

    const resp = await fetch(url)
    const data: PokemonPaginateResp = await resp.json()
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

    setSimplePoke(newPokemonList)
    setIsFetching(false)
  }


  useEffect(() => {
    fetchPokes()
  }, [])
  

  return {
    simplePoke,
    isFetching,
  }
}

export default usePokemonSearch