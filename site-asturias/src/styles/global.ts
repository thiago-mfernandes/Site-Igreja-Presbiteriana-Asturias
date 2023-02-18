import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    
    html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
    
    //font-size: 16px (Ideal para Desktop)
    //1 REM = 16px
    }

    &:focus {
      outline: 0;
    }

    body {
      background-color: ${props => props.theme.colors['gray-900']};
      color: ${props => props.theme.colors.black};
      -webkit-font-smoothing: antialiased;
      word-wrap: break-word;
    }

    body, input, textarea, button {
      font: 400 1rem "Lora", serif;
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