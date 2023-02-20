/**
 * [x] - Nossa história
   [] - A igreja Presbiteriana do Brasil
   [] - Pastor Robson Leandro Binotto
   [] - No que nós cremos? - Propostio, Missao e valores
   [] - em que cremos?
   [] - o que fazemos?
   [] -- ebd
   [] -- culto
   [] -- culto infantil
   [] -- reuniao de oracao
   [] -- estudo biblico
 */

import { PageHeader } from "../../components/PageHeader";
import { Text } from "../../components/Text";
import { AboutContainer } from "./styles";

export function About() {
  return (
    <>
      <PageHeader />
      <AboutContainer>
        <Text>
          No dia 19 de agosto de 2012 foi então organizada, na cidade de Piracicaba, a Igreja Presbiteriana Astúrias, como filha da Igreja Presbiteriana de Piracicaba. O primeiro pastor a presidir a igreja foi o Rev. Jeremias Romualdo Alves, que permaneceu a frente da Igreja Presbiteriana Astúrias até 2015, quando foi chamado para cumprir designação de Capelão no Exército Brasileiro.
        </Text>
        <Text>
          Em janeiro de 2016, assume a Igreja Presbiteriana Astúrias, como pastor presidente, para continuação dos trabalhos, o Rev. Robson Leandro Binotto, estando à frente de nossa Igreja até o presente momento.
        </Text>      

      </AboutContainer>
    </>
  );
}