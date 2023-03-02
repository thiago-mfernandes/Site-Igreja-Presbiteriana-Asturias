import { AddressContainer, ContactContainer, ContainerFooter, ContainerLogo, PreacherContainer, ReservedRights, TheChurchContainer } from "./styles";
import { Subtitle } from "@/components/Subtitle";
import { Text } from "@/components/Text";
import { FacebookLogo, InstagramLogo, WhatsappLogo, Heart, ArrowSquareOut } from "phosphor-react";
import { Verse } from "@/components/Verse";
import Link from "next/link";
import Image from 'next/image'

export function Footer() {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <Link href="/">
          <Image 
            height={78}
            width={195}
            src="/assets/logo/logo-white.png" 
            alt="Logotipo da Igreja Presbiteriana Astúrias" 
          />
        </Link>
      </ContainerLogo>

      <TheChurchContainer>
        <Subtitle>
          Igreja Presbiteriana Astúrias
        </Subtitle>
        <Verse 
          verse="Porque, onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles." citation="MT 18:20"
          changeColorOfBorderLeft
        />
      </TheChurchContainer>

      <AddressContainer>
        <Subtitle>
          Endereço
        </Subtitle>
        <Text>
          Av. Luiz Pereira Leite, 775 <br /> 
          Jd. Asturias - Piracicaba - SP <br />
          <Link href="https://www.google.com/maps/place/Igreja+Presbiteriana+Astúrias+-+Av.+Luiz+Pereira+Leite,+775+-+Jardim+Asturias+I,+Piracicaba+-+SP,+13426-239/@-22.7597693,-47.6289662,17z/data=!4m6!3m5!1s0x94c6306d970090d9:0xbd3215ce77411e58!8m2!3d-22.7597693!4d-47.6289662!16s%2Fg%2F1ptx7d1rb" target="_blank">
            Ver Localização
            <ArrowSquareOut size={24} />
          </Link>
        </Text>
      </AddressContainer>

      <ContactContainer>
        <Subtitle>
          Contato
        </Subtitle>
          <div>
            <Link href="https://wa.me/5519981074353" target="_blank">
              <WhatsappLogo size={24}/>
            </Link>            
            (019) - 9.8107-4353 <br/>
            contato@ipbasturias.com.br
          </div>
      </ContactContainer>

      <PreacherContainer>
        <Subtitle>
          Pr. Robson Leandro Binotto
        </Subtitle>
        <div>
          <Link href="https://www.facebook.com/ipbasturias/" target="_blank">
            <FacebookLogo size={24} />
          </Link>
          <Link href="https://www.instagram.com/ipbasturias/" target="_blank">
            <InstagramLogo size={24} />            
          </Link>
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