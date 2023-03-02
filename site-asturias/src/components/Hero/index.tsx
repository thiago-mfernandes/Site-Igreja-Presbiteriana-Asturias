import { BackgroundVideo } from './BackgroundVideo'
import { HeaderContainer } from './styles';
import { Welcome } from './Welcome';
import { useMenuHamburguer } from "@/hooks/useMenuHamburguer";
import { SectionContainer } from '@/components/Section/styles';

export function Hero() {
  const { showMenu } = useMenuHamburguer();  

  return (
    <SectionContainer>
      <HeaderContainer>
        <BackgroundVideo />
        <Welcome onShowMenu={showMenu} />
      </HeaderContainer>
    </SectionContainer>
  );
}
