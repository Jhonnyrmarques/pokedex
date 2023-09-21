import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Days One', sans-serif;

    display: grid;
    place-items: center;

    overflow-y: auto;

    background: ${(props) => props.theme['background-body']};
  }

  border-style, input, button {
    font-family: 'Days One', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    border: 0;
    cursor: pointer;
    transition: filter 0.2s;
  }

 a:hover {
    filter: brightness(0.9);
  }

`
