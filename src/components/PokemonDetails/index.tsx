import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

import * as S from './styles'
import { ArrowLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import charmander from '../../assets/004.png'
import charmeleon from '../../assets/005.png'
import charizard from '../../assets/006.png'

export function PokemonDetails() {
  const { pokemon } = useContext(PokemonsContext)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <S.Detail>
      <S.Character>
        <div>
          <button onClick={handleBack}>
            <ArrowLeft size={24} />
            Pokedex
          </button>

          <h1 className="title">
            {pokemon?.name}{' '}
            <span className="character-id">
              {`#`}
              {pokemon?.id.toString().padStart(4, '0')}
            </span>
          </h1>

          <div className="types-top">
            {pokemon?.types.map((item, i) => {
              return (
                <S.PokemonsTypes variant={item.type.name} key={i}>
                  {item.type.name}
                </S.PokemonsTypes>
              )
            })}
          </div>

          <img src={pokemon?.images} alt="" />

          <h4 className="title-evolution">Evoluções</h4>

          <div className="evolutions">
            <div className="names">
              <img src={charmander} alt="" />

              <h6>
                Charmander <span className="character-id">{`#`}004</span>
              </h6>
              <div className="types">
                <span className="type">Fire</span>
              </div>
            </div>

            <div className="names">
              <img src={charmeleon} alt="" />
              <h6>
                Charmeleon <span className="character-id">{`#`}004</span>
              </h6>
              <div className="types">
                <span className="type">Fire</span>
              </div>
            </div>

            <div className="names">
              <img src={charizard} alt="" />

              <h6>
                Charizard <span className="character-id">{`#`}004</span>
              </h6>
              <div className="types">
                <span className="type">Fire</span>
                <span className="type">Flying</span>
              </div>
            </div>
          </div>
        </div>
      </S.Character>
      <S.Bio>
        <div className="about">
          <h1>Sobre</h1>
        </div>
        <div className="abilities">
          <h4>Habilidades</h4>
          {pokemon?.abilites.map((item, i) => {
            return <span key={i}>{item.ability.name}</span>
          })}
        </div>

        <h4>Peso e Altura</h4>

        <div className="weight-height">
          <div>
            <span className="weight">
              {pokemon?.weight !== undefined ? pokemon.weight / 10 : 0} Kg
            </span>
            <span className="height">
              {pokemon?.height !== undefined ? pokemon.height / 10 : 0} m
            </span>
          </div>
        </div>

        <h4>Estatísticas</h4>

        {pokemon?.stats.map((item, i) => {
          return (
            <S.Stats key={i}>
              <h5 className="stat-name">{item.stat.name}</h5>
              <h5 className="base_stat">{item.base_stat}</h5>
              <S.BarStats variant={item.base_stat}>
                <span className="labelStyles"></span>
              </S.BarStats>
            </S.Stats>
          )
        })}
      </S.Bio>
    </S.Detail>
  )
}
