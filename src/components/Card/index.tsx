import { ReactNode } from 'react'

import * as S from './styles'

interface PokemonCardProps {
  children: ReactNode
}

export function Card({ children }: PokemonCardProps) {
  return (
    <S.Container>
      <S.PokemonCard>{children}</S.PokemonCard>
    </S.Container>
  )
}
