import { BackgroundVideo } from './BackgroundVideo'
import { HeaderContainer, HeroContainer } from './styles';
import { Welcome } from './Welcome';
import { useMenuHamburguer } from "../../hooks/useMenuHamburguer";

export function Hero() {
  const { showMenu } = useMenuHamburguer();  

  return (
    <HeroContainer>
      <HeaderContainer>
        <BackgroundVideo />
        <Welcome onShowMenu={showMenu} />
      </HeaderContainer>
    </HeroContainer>
  );
}