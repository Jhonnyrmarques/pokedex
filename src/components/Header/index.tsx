import { MagnifyingGlass } from 'phosphor-react'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as S from './styles'

import pokball from '../../assets/pokeball.png'
import { useForm } from 'react-hook-form'

import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Header() {
  const { fetchPokemons } = useContext(PokemonsContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPokemons(data: SearchFormInputs) {
    await fetchPokemons(data.query)
  }

  return (
    <S.Header>
      <S.Logo>
        <img src={pokball} alt="pokedex logo" /> <span>Pokédex</span>
      </S.Logo>

      <S.Search onSubmit={handleSubmit(handleSearchPokemons)}>
        <input type="text" placeholder="buscar" {...register('query')} />

        <button type="submit">
          <MagnifyingGlass size={24} />
        </button>
      </S.Search>
    </S.Header>
  )
}
