import { css, styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 280px);

  align-items: center;
  justify-content: center;
`

export const PokemonCard = styled.div`
  width: 240px;
  height: 218px;

  cursor: pointer;

  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  margin-top: 1rem;
  margin-bottom: 0.8rem;

  img {
    width: 120px;
    height: 118px;
  }
`

interface TypesColorProps {
  variant?: string
}

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  height: 100%;

  .number {
    font-weight: normal;
    color: ${(props) => props.theme['gray-300']};
  }

  h3 {
    color: #111827;
    font-weight: normal;
  }
`
export const PokemonsTypes = styled.span<TypesColorProps>`
  font-size: 12px;
  color: ${(props) => props.theme['gray-900']};

  border-radius: 9px;

  margin-left: 4px;
  padding: 6px;

  ${(props) =>
    props.variant === 'grass' &&
    css`
      background: ${props.theme['green-400']};
    `}

  ${(props) =>
    props.variant === 'poison' &&
    css`
      background: ${props.theme['purple-500']};
    `}

  ${(props) =>
    props.variant === 'fire' &&
    css`
      background: ${props.theme['orange-500']};
    `}

    ${(props) =>
    props.variant === 'water' &&
    css`
      background: ${props.theme['blue-500']};
    `}

    ${(props) =>
    props.variant === 'bug' &&
    css`
      background: ${props.theme['green-500']};
    `}

    ${(props) =>
    props.variant === 'normal' &&
    css`
      background: ${props.theme['gray-400']};
    `}

    ${(props) =>
    props.variant === 'flying' &&
    css`
      background: linear-gradient(
        180deg,
        rgba(61, 199, 239, 1) 49%,
        rgba(189, 185, 184, 1) 50%
      );
    `}
`
