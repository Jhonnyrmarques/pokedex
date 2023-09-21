import { ReactNode } from 'react'
import * as S from './styles'

interface PokemonCardProps {
  children: ReactNode
}

export function Container({ children }: PokemonCardProps) {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  )
}
