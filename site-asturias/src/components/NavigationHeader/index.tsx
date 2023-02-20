import { useMenuHamburguer } from "../../hooks/useMenuHamburguer"
import { useWindowSize } from "../../hooks/useWindowSize";
import { LogoContainer, MenuHamburguer, NavigationLinks } from "./styles"
import { List, X } from "phosphor-react";

import logoBlack from "../../assets/logo/logo-black.png"
import logoWhite from "../../assets/logo/logo-white.png"

import data from "../../data/navlinks.json";
import { useLocation } from "react-router-dom";

export function NavigationHeader() {

  const { showMenu, handleNavigationMenu } = useMenuHamburguer();
  const { width } = useWindowSize();
  let { pathname } = useLocation();
  console.log(showMenu)

  return (
    <>
      <LogoContainer
        path={pathname} 
        inShowMenuChangeColor={showMenu}
      > 
        <a href='#'>
          <img 
            src={pathname === '/' ? logoBlack : logoWhite} 
            alt="Logotipo da Igreja Presbiteriana Astúrias" 
            width={90} />
        </a>
      </LogoContainer>

      {/** When MenuHamburguer Icon is visible or Not */}
      { width < 500 ?
          <MenuHamburguer 
            inShowMenuChangeColor={pathname}
            showMenu={showMenu} 
            onClick={handleNavigationMenu}
          >
            {showMenu 
              ? <X size={40} /> 
              : <List size={40} />
            }
          </MenuHamburguer> 
        : <></> 
      }
          
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
    </>
  );
}