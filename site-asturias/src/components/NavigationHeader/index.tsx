import Link from "next/link";
import Image from "next/image";
import { useMenuHamburguer } from "@/hooks/useMenuHamburguer"
import { useWindowSize } from "@/hooks/useWindowSize";
import { LogoContainer, MenuHamburguer } from "./styles"
import { List, X } from "phosphor-react";
import { useRouter } from "next/router";
import logoBlack from "public/assets/logo/logo-black.png"
import logoWhite from "public/assets/logo/logo-white.png"
import { NavigationLinks } from "./NavigationLinks";


export function NavigationHeader() {

  const { showMenu, handleNavigationMenu, setShowMenu } = useMenuHamburguer();
  const { width } = useWindowSize();
  let { pathname } = useRouter();

  return (
    <>
      <LogoContainer
        path={pathname} 
        inShowMenuChangeColor={showMenu}
      > 
        <Link href='/'>
          {
            pathname === '/' 
              ? 
                <Image 
                priority
                  src={logoBlack} alt="Logotipo da Igreja Presbiteriana Astúrias" 
                  width={195} 
                  height={78}
                />
              :
                <Image 
                priority
                  src={logoWhite} alt="Logotipo da Igreja Presbiteriana Astúrias" 
                  height={78}
                  width={195} 
                />
          }
        </Link>
      </LogoContainer>

      {/** When MenuHamburguer Icon is visible or Not */}
      { width <= 800 
        ?
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
          
      {width >= 768 || showMenu
        ?
          <NavigationLinks 
            showMenu={showMenu} 
            isHomePage={pathname} 
            handleOnClick={setShowMenu} />
        : 
          <></>
      }    
    </>
  );
}