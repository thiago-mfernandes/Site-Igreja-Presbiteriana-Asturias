import { LinkButton } from "../LinkButton";
import { Subtitle } from "../Subtitle";
import { Text } from "../Text";
import { ContainerSection, MainServices, Service, WelcomeWords } from "./styles";

export function About() {
  return (
    <ContainerSection>

      <WelcomeWords>
        <Subtitle textColor="green">Seja Bem Vindo</Subtitle>
        <Text>Somos uma igreja que valoriza os relacionamentos. É assim que podemos nos definir. Mas não qualquer tipo... Valorizamos os relacionamentos em Cristo Jesus, pois é assim que pretendemos alcançar um ambiente onde cada vez mais o verdadeiro amor de Deus possa ser manifestado. Procuramos viver nossos relacionamentos através da Bíblia, que é a única regra de fé e prática de nossa comunidade. Somos, acima de tudo, um grupo de pessoas buscando, através de um ambiente acolhedor, viver para testemunhar do amor de Cristo.</Text>
        <LinkButton variantBackgroundColor={"gray"}>
          Saiba Mais
        </LinkButton>
      </WelcomeWords>

      <MainServices>
        <ul>
          <Service>
            <Subtitle textColor="white">Culto de Adoração</Subtitle>
            <span>Domingo | 18:00 - 20:00 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
          <Service>
            <Subtitle textColor="white">Escola Bíblica Dominical</Subtitle>
            <span>Domingo | 09:00 - 10:30 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
          <Service>
            <Subtitle textColor="white">Reunião de Oração</Subtitle>
            <span>Segunda | 19:00 - 20: 30 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
          <Service>
            <Subtitle textColor="white">Estudo Bíblico</Subtitle>
            <span>Quinta | 19:00 - 20: 30 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
        </ul>
      </MainServices>
    </ContainerSection>
  );
}