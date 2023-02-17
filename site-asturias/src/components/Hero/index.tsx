
import { useWindowSize } from '@/hooks/useWindowSize';
import Image from 'next/image'
import { List, X } from 'phosphor-react';
import { useState } from 'react';
import logo from "../../assets/logo/logo-white.png"
import { BackgroundVideo } from './BackgroundVideo'
import { HeaderContainer, HeroContainer, LogoContainer, MenuHamburguer, NavigationLinks } from './styles';
import { Welcome } from './Welcome';


export function Hero() {

  const { width } = useWindowSize();
  const [showMenu, setSHowMenu] = useState(false);

  function handleNavigationMenu() {
    setSHowMenu(!showMenu);
  }

  return (
    <HeroContainer>
      <HeaderContainer>
        <LogoContainer> 
          <a href='#'>
            <Image priority src={logo} alt="Logotipo da Igreja Presbiteriana Astúrias" width={90} />
          </a>
        </LogoContainer>

        {/** When MenuHamburguer Icon is visible or Not */}
        { width < 500 ?
            <MenuHamburguer onClick={handleNavigationMenu}>
              {showMenu ? <X size={40} /> : <List size={40} />}
            </MenuHamburguer> 
          : <></> }
        
        {width > 500 || showMenu?
            <NavigationLinks showMenu={showMenu}>
              <ul>
                <li><a href="index.html" title="Home">Home</a></li>
                <li><a href="about.html" title="About">Sobre</a></li>
                <li><a href="events.html" title="Services">Eventos</a></li>
                <li><a href="contact.html" title="Contact us">Contato</a></li>	
              </ul>
            </NavigationLinks>
          : <></>}

        <BackgroundVideo />
        <Welcome />
      </HeaderContainer>
   
    </HeroContainer>
  );
}