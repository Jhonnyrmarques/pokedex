import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 280px);

  align-items: center;
  justify-content: center;

  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 200px);
  }

  @media (min-width: 390px) {
    grid-template-columns: repeat(1, 200px);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 280px);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 280px);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, 280px);
  }

  @media (min-width: 2300px) {
    grid-template-columns: repeat(6, 280px);
  }
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

  @media (min-width: 300px) {
    width: 180px;
    height: 180px;
  }

  @media (min-width: 390px) {
    width: 200px;
    height: 160px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 600px) {
    height: 180px;
  }

  @media (min-width: 700px) {
    width: 240px;
    height: 218px;
  }

  @media (min-width: 1600px) {
    height: 240px;
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

  @media (min-width: 300px) {
    margin-top: 1rem;

    img {
      width: 56px;
      height: 56px;
    }

    .number {
      font-size: 0.6rem;
    }
  }

  @media (min-width: 600px) {
    img {
      width: 64px;
      height: 64px;
    }

    h3,
    .number {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 700px) {
    img {
      width: 100px;
      height: 100px;
    }

    h3,
    .number {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 110px;
      height: 110px;
    }

    h3 {
      font-size: 1rem;
    }

    .number {
      font-size: 1rem;
    }
  }

  @media (min-width: 1600px) {
    img {
      width: 120px;
      height: 120px;
    }

    h3,
    .number {
      font-size: 1.2rem;
    }
  }
`
