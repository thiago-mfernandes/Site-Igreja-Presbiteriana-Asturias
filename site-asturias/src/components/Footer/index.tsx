import { AddressContainer, ContactContainer, ContainerFooter, ContainerLogo, PreacherContainer, ReservedRights, TheChurchContainer } from "./styles";
import logo from '../../assets/logo/logo-white.png'
import { Subtitle } from "../Subtitle";
import { Text } from "../Text";
import { FacebookLogo, InstagramLogo, WhatsappLogo, Heart } from "phosphor-react";
import { LinkButton } from "../LinkButton";

export function Footer() {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <a href="#">
          <img src={logo} alt="Logotipo da Igreja Presbiteriana Astúrias" />
        </a>
      </ContainerLogo>

      <TheChurchContainer>
        <Subtitle>
          Igreja Presbiteriana Astúrias
        </Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias ad fugit necessitatibus rem corrupti temporibus tempore odio, quia voluptatum eos dicta modi vero, excepturi tenetur eius sunt sint porro!
        </Text>
      </TheChurchContainer>

      <AddressContainer>
        <Subtitle>
          Endereço
        </Subtitle>
        <Text>
          Av. Luiz Pereira Leite, 775 <br /> 
          Jd. Asturias - Piracicaba - SP <br />
          <LinkButton href="#" variantBackgroundColor="gray" >
            Ver Localização
          </LinkButton>
        </Text>
      </AddressContainer>

      <ContactContainer>
        <Subtitle>
          Contato
        </Subtitle>
          <div>
            <a href="https://wa.me/5519981074353" target="_blank">
              <WhatsappLogo size={24}/>
            </a>            
            (019) - 9.8107-4353 <br/>
            contato@ipbasturias.com.br
          </div>
      </ContactContainer>

      <PreacherContainer>
        <Subtitle>
          Pr. Robson Leandro Binotto
        </Subtitle>
        <div>
          <a href="https://www.facebook.com/ipbasturias/" target="_blank">
            <FacebookLogo size={24} />
          </a>
          <a href="https://www.instagram.com/ipbasturias/" target="_blank">
            <InstagramLogo size={24} />            
          </a>
        </div>
      </PreacherContainer>

      <ReservedRights>
        <Text>
          &copy; 
          Igreja Presbiteriana Astúrias - 
          Todos os Direitos Reservados
        </Text>
        <Text>
          Feito com <Heart size={22} weight="fill" /> por <a href="https://wa.me/5519984009105" target="_blank">&nbsp;Thiago Fernandes</a>
        </Text>
      </ReservedRights>

    </ContainerFooter>
  );
}