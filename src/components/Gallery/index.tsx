import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

import * as S from './styles'
import { Link } from 'react-router-dom'
import { Header } from '../Header'
import { PokemonTypes } from '../PokemonTypes'

export function Gallery() {
  const { pokemons } = useContext(PokemonsContext)

  function getPokemonId(id: number) {
    localStorage.setItem('pokemonId', id.toString())
  }

  return (
    <>
      <Header />

      <S.Container>
        {pokemons.map((item) => {
          return (
            <S.PokemonCard key={item.id} onClick={() => getPokemonId(item.id)}>
              <Link to="/details">
                <S.Gallery>
                  <img src={item.images} alt="" />
                  <span className="number">
                    Nº {item.id.toString().padStart(4, '0')}
                  </span>
                  <h3>{item.name}</h3>

                  <div>
                    {item.types.map((item, i) => {
                      return (
                        <PokemonTypes variant={item.type.name} key={i}>
                          {item.type.name}
                        </PokemonTypes>
                      )
                    })}
                  </div>
                </S.Gallery>
              </Link>
            </S.PokemonCard>
          )
        })}
      </S.Container>
    </>
  )
}
