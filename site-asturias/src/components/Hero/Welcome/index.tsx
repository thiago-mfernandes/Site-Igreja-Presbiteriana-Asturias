import { LinkButton } from "@/components/LinkButton";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { WelcomeProps } from "./interfaces";
import { WelcomeContainer, FollowUs, TitleContainer, CallToAction } from "./styles";

export function Welcome({ onShowMenu } : WelcomeProps){

  const { width } = useWindowSize();
  
  return(
    <WelcomeContainer>  
      {width > 500 &&
        <FollowUs>
          <ul>
            <li>
              <Link href="https://www.youtube.com/@igrejapresbiterianaasturia6315" target="_blank">YouTube</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/ipbasturias/" target="_blank">Facebook</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/ipbasturias/" target="_blank">Instagram</Link>
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
          <Link href="/schedule">
            <LinkButton variantApplyBorder>Eventos</LinkButton>
          </Link>
          <Link href="/about">
            <LinkButton variantApplyBorder>Sobre Nós</LinkButton>
          </Link>
        </CallToAction>
      </TitleContainer> 
    </WelcomeContainer> 
  );
}