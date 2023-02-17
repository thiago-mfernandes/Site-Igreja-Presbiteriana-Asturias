import { LinkButton } from "../LinkButton";
import { ContainerSection, MainServices, Service, WelcomeWords } from "./styles";

export function About() {
  return (
    <ContainerSection style={{display: 'flex', flexDirection: 'column'}}>

      <WelcomeWords>
        <h2>Seja Bem Vindo</h2>
        <p>Somos uma igreja que valoriza os relacionamentos. É assim que podemos nos definir. Mas não qualquer tipo... Valorizamos os relacionamentos em Cristo Jesus, pois é assim que pretendemos alcançar um ambiente onde cada vez mais o verdadeiro amor de Deus possa ser manifestado. Procuramos viver nossos relacionamentos através da Bíblia, que é a única regra de fé e prática de nossa comunidade. Somos, acima de tudo, um grupo de pessoas buscando, através de um ambiente acolhedor, viver para testemunhar do amor de Cristo.</p>
        <LinkButton href="#" variantBackgroundColor={"cinza"}>
          Saiba Mais
        </LinkButton>
      </WelcomeWords>

      <MainServices>
        <ul>
          <Service>
            <h3>Culto de Adoração</h3>
            <span>Domingo | 18:00 - 20:00 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
          <Service>
            <h3>Escola Bíblica Dominical</h3>
            <span>Domingo | 09:00 - 10:30 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
          <Service>
            <h3>Reunião de Oração</h3>
            <span>Segunda | 19:00 - 20: 30 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
          <Service>
            <h3>Estudo Bíblico</h3>
            <span>Quinta | 19:00 - 20: 30 <br/> </span>
            <span>Avenida Luiz Pereira Leite, 775 <br/> </span>
            <span>Jd. Astúrias - Piracicaba - SP</span>
          </Service>
        </ul>
      </MainServices>
    </ContainerSection>
  );
}