import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 1.6rem;

  img {
    height: 3.125rem;
  }

  @media (min-width: 300px) {
    img {
      display: none;
    }
  }

  @media (min-width: 500px) {
    img {
      display: block;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme['yellow-400']};
    font-size: 1.4rem;
  }

  @media (min-width: 300px) {
    span {
      display: none;
    }
  }

  @media (min-width: 590px) {
    span {
      display: block;
    }
  }
`

export const Search = styled.form`
  display: flex;

  input {
    border: 1px solid ${(props) => props.theme['gray-300']};
    padding: 0.8rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 100%;
    background: ${(props) => props.theme['gray-200']};

    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme['gray-400']};
    }
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    padding: 1rem;
    border: 1px solid red;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    &:hover {
      background: ${(props) => props.theme['background-body']};

      svg {
        color: ${(props) => props.theme.white};
      }

      transition: background-color 0.2s;
    }
  }

  svg {
    color: ${(props) => props.theme['gray-500']};
    right: 8px;
  }
`
