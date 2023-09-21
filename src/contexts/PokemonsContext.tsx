import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../services/api/api'

interface PokemonTypes {
  type: {
    name: string
  }
}

interface PokemonAbilities {
  ability: {
    name: string
  }
}

interface PokemonStats {
  base_stat: number
  stat: {
    name: string
  }
}

interface Pokemon {
  name: string
  url?: string
  id: number
  images: string
  abilites: PokemonAbilities[]
  types: PokemonTypes[]
  weight: number
  height: number
  stats: PokemonStats[]
}

interface Request {
  id: number
  types: PokemonTypes[]
  images: []
}

interface PokemonsContextType {
  pokemons: Pokemon[]
  pokemon: Pokemon | null
}

interface PokemonsProviderProps {
  pokemonId?: number
  children: ReactNode
}

export const PokemonsContext = createContext({} as PokemonsContextType)

export function PokemonsProvider({
  children,
  pokemonId,
}: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  async function getAllPokemons() {
    const response = await api.get('pokemon')
    const { results } = response.data

    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types, images } = await getMoreInfo(String(pokemon.url))

        return {
          name: pokemon.name,
          id,
          types,
          images,
        }
      }),
    )

    setPokemons(payloadPokemons)
  }

  async function getPokemon() {
    const response = await api.get(`pokemon/${pokemonId}`)

    const { id, name, types, sprites, abilities, weight, height, stats } =
      response.data
    const image = sprites.other.dream_world.front_default

    setPokemon({
      id,
      name,
      types,
      images: image,
      abilites: abilities,
      weight,
      height,
      stats,
    })
  }

  useEffect(() => {
    getAllPokemons()

    if (pokemonId ?? 0) {
      getPokemon()
    }
  }, [])

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url)
    const images = response.data.sprites.other.dream_world.front_default
    const { id, types } = response.data

    return {
      id,
      types,
      images,
    }
  }

  return (
    <PokemonsContext.Provider value={{ pokemons, pokemon }}>
      {children}
    </PokemonsContext.Provider>
  )
}
