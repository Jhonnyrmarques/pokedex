import { Container } from '../../components/Container'
import { Gallery } from '../../components/Gallery'
import { Header } from '../../components/Header'
import { PokemonsProvider } from '../../contexts/PokemonsContext'

export function Home() {
  return (
    <Container>
      <Header />
      <PokemonsProvider>
        <Gallery />
      </PokemonsProvider>
    </Container>
  )
}
