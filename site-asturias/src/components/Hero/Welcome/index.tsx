import { LinkButton } from "../../LinkButton";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { CallToAction, FollowUs, TitleContainer, WelcomeContainer } from "./styles";

interface WelcomeProps {
  onShowMenu: boolean;
}

export function Welcome({ onShowMenu} : WelcomeProps){

  const { width } = useWindowSize();
  
  return(
    <WelcomeContainer>  
      {width > 500 &&
        <FollowUs className="aqui tem uma classe com um estilo: hero-left-bar">
          <ul> {/**aqui vai o card lateral com o siga-nos */}
            <li>Siga-nos</li>
            <li>
              <a href="#0" title="">Facebook</a>
            </li>
            <li>
              <a href="#0" title="">YouTube</a>
            </li>
            <li>
              <a href="#0" title="">Instagram</a>
            </li>
          </ul> 
        </FollowUs>
      }

      <TitleContainer showMenu={onShowMenu} >
        <h1>
          Existimos para a<br />
          Glória de Deus.            
        </h1>

        <CallToAction>
          <LinkButton variantApplyBorder href="#">Eventos</LinkButton>
          <LinkButton variantApplyBorder href="#">Sobre Nós</LinkButton>
        </CallToAction>
      </TitleContainer> 
    </WelcomeContainer> 
  );
}