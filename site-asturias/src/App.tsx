import { ThemeProvider } from "styled-components";
import { About } from "./components/About";
import { BibleStudy } from "./components/BibleStudy";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { JoinUs } from "./components/JoinUs";
import { Schedule } from "./components/Schedule";
import { SocialMedia } from "./components/SocialMedia";
import { UpComingEvents } from "./components/UpComingEvents";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}> 
      <GlobalStyle />

      <Hero />        
      <About />
      <JoinUs />
      <UpComingEvents />
      <BibleStudy />
      <SocialMedia />
      <Footer />
      {/* <Schedule /> */}
    </ThemeProvider>
  )
}


