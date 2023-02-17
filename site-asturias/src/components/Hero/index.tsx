import logo from "../../assets/logo/logo-black.png"
import data from "../../data/navlinks.json";
import { useWindowSize } from '../../hooks/useWindowSize';
import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { BackgroundVideo } from './BackgroundVideo'
import { HeaderContainer, HeroContainer, LogoContainer, MenuHamburguer, NavigationLinks } from './styles';
import { Welcome } from './Welcome';


export function Hero() {

  const { width } = useWindowSize();
  const [showMenu, setSHowMenu] = useState(false);

  console.log(width);

  function handleNavigationMenu() {
    setSHowMenu(!showMenu);
  }

  return (
    <HeroContainer>
      <HeaderContainer>
        <LogoContainer changeColorOfLogo={showMenu}> 
          <a href='#'>
            <img src={logo} alt="Logotipo da Igreja Presbiteriana Astúrias" width={90} />
          </a>
        </LogoContainer>

        {/** When MenuHamburguer Icon is visible or Not */}
        { width < 500 ?
            <MenuHamburguer showMenu={showMenu} onClick={handleNavigationMenu}>
              {showMenu ? <X size={40} /> : <List size={40} />}
            </MenuHamburguer> 
          : <></> }
        
        {width > 500 || showMenu?
            <NavigationLinks showMenu={showMenu}>
              <ul>
                {
                  data.map((link) => (
                    <li key={link.id}>
                      <a href="#" title={link.title}>
                        {link.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </NavigationLinks>
          : <></>}

        <BackgroundVideo />
        <Welcome onShowMenu={showMenu} />
      </HeaderContainer>
    </HeroContainer>
  );
}