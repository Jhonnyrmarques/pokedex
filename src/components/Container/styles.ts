import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['background-card']};
  width: 90vw;
  height: 92vh;

  overflow-y: auto;
  overflow-x: hidden;

  border-radius: 6px;
`
