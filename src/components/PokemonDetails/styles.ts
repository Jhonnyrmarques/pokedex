import styled, { css } from 'styled-components'

export const Detail = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'character bio'
    'character bio';
`

export const Character = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 0.8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    margin-bottom: 1rem;

    font-size: 12px;

    svg {
      color: ${(props) => props.theme['background-body']};
    }
  }

  .title {
    font-weight: normal;
  }

  .character-id {
    color: ${(props) => props.theme['gray-300']};
  }

  .types-top {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    margin-top: 0.4rem;
  }

  .type {
    width: 4rem;
    height: 1rem;
    font-size: 12px;
    text-align: center;
    border-radius: 8px;
    background-color: ${(props) => props.theme['orange-500']};
  }

  img {
    width: 500px;
    height: 500px;
  }

  .title-evolution {
    margin-top: 1rem;
  }

  .evolutions {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 1rem;
  }

  .types {
    display: flex;
    justify-content: center;
    gap: 0.4rem;
  }

  .evolutions img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme['orange-500']};
    background: #fcf0e2;
    padding: 0.8rem;
  }

  .names {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
`

export const Bio = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  .about {
    margin-top: 2rem;
  }

  h4 {
    font-weight: normal;
  }

  .abilities h4 {
    margin-bottom: 0.8rem;
  }

  .abilities span {
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 8px;
    font-size: 12px;
    margin-right: 4px;

    padding: 6px;
  }

  .weight,
  .height {
    box-shadow: 2px 3px 2px ${(props) => props.theme['gray-300']};
    padding: 8px;
    font-size: 14px;
  }

  .height {
    margin-left: 10px;
  }

  .labelStyles {
    padding: 5px;
    color: white;
  }
`

interface TypesColorProps {
  variant?: string
}

export const PokemonsTypes = styled.h3<TypesColorProps>`
  width: 4rem;
  font-size: 12px;
  text-align: center;

  color: ${(props) => props.theme['gray-900']};

  border-radius: 8px;

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

interface BarStatsColor {
  variant: number
}

export const Stats = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 50px;
  display: flex;
  gap: 2rem;

  .stat-name {
    font-weight: normal;
    color: ${(props) => props.theme['gray-400']};
  }

  .base_stat {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const BarStats = styled.div<BarStatsColor>`
  height: 100%;
  width: ${(props) => props.variant}%;
  background-color: ${(props) =>
    props.variant >= 60 ? props.theme['green-400'] : props.theme['orange-500']};
  border-radius: inherit;
`
