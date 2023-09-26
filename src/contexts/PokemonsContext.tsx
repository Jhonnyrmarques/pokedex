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
  abilities: PokemonAbilities[]
  types: PokemonTypes[]
  weight: number
  height: number
  stats: PokemonStats[]
}

interface PokemonsContextType {
  pokemons: Pokemon[]
  pokemon: Pokemon | null
  getPokemon: (pokemonId: string) => Promise<Pokemon>
  fetchPokemons: (query: string) => Promise<void>
}

interface PokemonsProviderProps {
  children: ReactNode
}

export const PokemonsContext = createContext({} as PokemonsContextType)

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  const fetchPokemons = useCallback(async (query?: string) => {
    const response = await api.get('pokemon/?limit=60&offset=0')

    let payloadPokemons = []

    if (query) {
      const { id, name, types, images, stats, abilities, weight, height } =
        await getPokemon(query)

      payloadPokemons = [
        {
          id,
          name,
          types,
          abilities,
          weight,
          height,
          images,
          stats,
        },
      ]
      setPokemons(payloadPokemons)
    } else {
      payloadPokemons = await Promise.all(
        response.data.results.map(async (pokemon: Pokemon) => {
          const response = await api.get(String(pokemon.url))

          const { id, name, types, sprites, stats } = response.data

          return {
            name,
            id,
            types,
            stats,
            images: sprites.other.dream_world.front_default,
          }
        }),
      )
    }

    setPokemons(payloadPokemons)
  }, [])

  async function getPokemon(pokemonId?: string): Promise<Pokemon> {
    const response = await api.get(`pokemon/${pokemonId}`)

    const { id, name, types, sprites, abilities, weight, height, stats } =
      response.data
    const image = sprites.other.dream_world.front_default

    setPokemon({
      id,
      name,
      types,
      images: image,
      abilities,
      weight,
      height,
      stats,
    })

    return {
      name,
      id,
      types,
      stats,
      abilities,
      weight,
      height,
      images: sprites.other.dream_world.front_default,
    }
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
