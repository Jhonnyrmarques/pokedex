import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/axios'

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

interface PokemonsContextType {
  pokemons: Pokemon[]
  pokemon: Pokemon | null
  getPokemon: (pokemonId: string) => Promise<void>
  fetchPokemons: (query: string) => Promise<void>
}

interface PokemonsProviderProps {
  pokemonId?: number
  children: ReactNode
}

export const PokemonsContext = createContext({} as PokemonsContextType)

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  const fetchPokemons = useCallback(async (query?: string) => {
    const response = await api.get(`${query ? `pokemon/${query}` : 'pokemon'}`)

    let payloadPokemons = []

    if (!query) {
      const { results } = response.data

      payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const response = await api.get(String(pokemon.url))
          const { id, types, sprites } = response.data

          return {
            name: pokemon.name,
            id,
            types,
            images: sprites.other.dream_world.front_default,
          }
        }),
      )
    } else {
      const { id, name, types, sprites } = response.data
      payloadPokemons = [
        { id, name, types, images: sprites.other.dream_world.front_default },
      ]
    }

    setPokemons(payloadPokemons)
  }, [])

  async function getPokemon(pokemonId?: string) {
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
    fetchPokemons()
  }, [fetchPokemons])

  return (
    <PokemonsContext.Provider
      value={{ pokemons, fetchPokemons, pokemon, getPokemon }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}
