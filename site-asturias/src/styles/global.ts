import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  

    &:focus {
      outline: 0;
    }

    body {
      background-color: ${props => props.theme.colors['gray-900']};
      color: ${props => props.theme.colors.black};
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font: 400 1rem "Roboto", sans-serif;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }
  }
`;