import Link from "next/link";
import { LinkButton } from "@/components/LinkButton";
import { SectionContainer } from "@/components/Section/styles";
import { Title } from "@/components/Title";
import { Text } from "@/components/Text";
import { ContainerContent } from "./styles";

export function JoinUs() {
  return (
    <SectionContainer>

      <ContainerContent>
        <Title>Associe-se</Title>
        <Text>A igreja primitiva era distinta não por ser o centro de todos os esportes e passatempos e funcionar essencialmente como um clube social, mas por orar fervorosamente e pregar a Palavra de Deus. Reunir-se ao redor do trono da graça e da Palavra de Deus é o coração da comunhão cristã. Esses aspectos estão no centro dos nossos ministérios.</Text>
        <Link href="/ministries">
          <LinkButton variantBackgroundColor="green">
            Estou Interessado
          </LinkButton>
        </Link> 
      </ContainerContent>

      

      <ContainerContent>
        <Title>Junte-se a nós</Title>
        <Text>Nosso ministério de Louvor busca adorar a Deus segundo Ele nos ordenou, visando sua aprovação e deleite Nossa base para isto é a palavra de Deus.</Text>
        <Link href="/ministries">
          <LinkButton variantBackgroundColor="green">
            Saber mais
          </LinkButton>
        </Link>
      </ContainerContent>


    </SectionContainer>
  );
}
