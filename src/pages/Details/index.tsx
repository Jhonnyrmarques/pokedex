import { Container } from '../../components/Container'

import { PokemonsProvider } from '../../contexts/PokemonsContext'
import { PokemonDetails } from '../../components/PokemonDetails'

export function Details() {
  const pokemonID = localStorage.getItem('pokemonId')

  return (
    <Container>
      <PokemonsProvider pokemonId={Number(pokemonID)}>
        <PokemonDetails />
      </PokemonsProvider>
    </Container>
  )
}
