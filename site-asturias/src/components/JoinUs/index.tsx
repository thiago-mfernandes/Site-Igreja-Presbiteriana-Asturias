import { LinkButton } from "../LinkButton";
import { Text } from "../Text";
import { Title } from "../Title";
import { ContainerContent, ScheduleSection } from "./styles";

export function JoinUs() {
  return (
    <ScheduleSection>


      <ContainerContent>
        <Title>Associe-se</Title>
        <Text>A igreja primitiva era distinta não por ser o centro de todos os esportes e passatempos e funcionar essencialmente como um clube social, mas por orar fervorosamente e pregar a Palavra de Deus. Reunir-se ao redor do trono da graça e da Palavra de Deus é o coração da comunhão cristã. Esses aspectos estão no centro dos nossos ministérios.</Text>
        <LinkButton href="#" variantBackgroundColor="green">
          Estou Interessado
        </LinkButton> 
      </ContainerContent>

      

      <ContainerContent>
        <Title>Junte-se a nós</Title>
        <Text>Nosso ministério de Louvor busca adorar a Deus segundo Ele nos ordenou, visando sua aprovação e deleite Nossa base para isto é a palavra de Deus.</Text>
        <LinkButton href="#" variantBackgroundColor="green">
          Saber mais
        </LinkButton> 
      </ContainerContent>


    </ScheduleSection>
  );
}
/**
 * 
 */