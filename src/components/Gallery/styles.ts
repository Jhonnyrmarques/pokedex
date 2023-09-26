import { styled } from 'styled-components'

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
