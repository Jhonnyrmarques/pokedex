import { ReactNode } from 'react'
import * as S from './styles'

interface PokemonTypeProps {
  children: ReactNode
  variant?: string
}

export function PokemonTypes({ variant, children }: PokemonTypeProps) {
  return <S.PokemonsTypes variant={variant}>{children}</S.PokemonsTypes>
}
