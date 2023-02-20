import { Subtitle } from "../Subtitle";
import { Text } from "../Text";
import { Title } from "../Title";
import { StudyContainer } from "./styles";

export function BibleStudy() {
  return (
    <StudyContainer>
      <Subtitle textColor="green">Portas Abertas</Subtitle>
      <Title textColor="white">Molde sua vida com as Palavras da Vida.</Title>
      <Text textColor="white">
        Todas as semanas, oferecemos aulas para toda a igreja e comunidade local. Esta é uma classe para todas as idades, onde todos se reunem. Temas como vida cristã, vida no lar, espiritualidade, papéis na família e outros diversos temas que nos auxiliam e nos fornecerem respostas para viver melhor para glória de Deus. Cremos na suficiência das escrituras, sendo nossa única regra de fé e prática, cabendo a nós sermos bons estudantes dela. Encorajamos você a participar conosco.
      </Text>
    </StudyContainer>
  );
}