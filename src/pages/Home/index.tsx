import { Container } from '../../components/Container'
import { Gallery } from '../../components/Gallery'
import { PokemonsProvider } from '../../contexts/PokemonsContext'

export function Home() {
  return (
    <Container>
      <PokemonsProvider>
        <Gallery />
      </PokemonsProvider>
    </Container>
  )
}
