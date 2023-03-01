import { LinkButton } from "../../LinkButton";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { CallToAction, FollowUs, TitleContainer, WelcomeContainer } from "./styles";
import { NavLink } from 'react-router-dom'

interface WelcomeProps {
  onShowMenu: boolean;
}

export function Welcome({ onShowMenu} : WelcomeProps){

  const { width } = useWindowSize();
  
  return(
    <WelcomeContainer>  
      {width > 500 &&
        <FollowUs>
          <ul> {/**aqui vai o card lateral com o siga-nos */}
            <li>
              <a href="https://www.youtube.com/@igrejapresbiterianaasturia6315" target="_blank">YouTube</a>
            </li>
            <li>
              <a href="https://www.facebook.com/ipbasturias/" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/ipbasturias/" target="_blank">Instagram</a>
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
          <NavLink to="/schedule">
            <LinkButton variantApplyBorder>Eventos</LinkButton>
          </NavLink>
          <NavLink to="/about">
            <LinkButton variantApplyBorder>Sobre Nós</LinkButton>
          </NavLink>
        </CallToAction>
      </TitleContainer> 
    </WelcomeContainer> 
  );
}