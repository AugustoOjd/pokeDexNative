

// const url = 'https://pokeapi.co/api/v2/pokemon?limit=40'

export const fetchPokes = async (url:string) => {

    const resp = await fetch(url)
    const data = resp.json()
    return data
}

