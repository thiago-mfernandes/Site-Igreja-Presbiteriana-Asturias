import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

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
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;
    @media (min-width: 1024px) {
      overflow-x: hidden;
    }
  }

  body, input, textarea, button {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 1rem;
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
`;