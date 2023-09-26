import { css, styled } from 'styled-components'

interface TypesColorProps {
  variant?: string
}

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

    ${(props) =>
    props.variant === 'electric' &&
    css`
      background: ${props.theme['yellow-400']};
    `}

    ${(props) =>
    props.variant === 'fairy' &&
    css`
      background: ${props.theme['pink-400']};
    `}

    ${(props) =>
    props.variant === 'fighting' &&
    css`
      background: ${props.theme['orange-400']};
    `}

    ${(props) =>
    props.variant === 'ground' &&
    css`
      background: linear-gradient(
        180deg,
        rgba(247, 222, 63, 1) 49%,
        rgba(171, 152, 66, 1) 50%
      );
    `}
`
