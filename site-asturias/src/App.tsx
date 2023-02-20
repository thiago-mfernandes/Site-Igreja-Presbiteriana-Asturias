import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";
import { Router } from '../Router'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}> 
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}


