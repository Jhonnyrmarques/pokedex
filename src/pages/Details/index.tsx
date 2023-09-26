import { Container } from '../../components/Container'

import { PokemonsProvider } from '../../contexts/PokemonsContext'
import { PokemonDetails } from '../../components/PokemonDetails'

export function Details() {
  return (
    <Container>
      <PokemonsProvider>
        <PokemonDetails />
      </PokemonsProvider>
    </Container>
  )
}
