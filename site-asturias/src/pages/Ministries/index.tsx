import { Subtitle } from "../../components/Subtitle";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";

import ucpLogo from '../../assets/ucp_logo.webp'
import recepcaoLogo from '../../assets/logo_recepcao.webp'
import louvorLogo from '../../assets/logo_louvor.webp'
import comunicacaoLogo from '../../assets/logo_comunicacao.webp'
import safLogo from '../../assets/logo_saf.png'
import uphLogo from '../../assets/logo_uph.png'
import { MinistriesContainer } from "./styles";

export function Ministries() {
  return(
    <MinistriesContainer>
      <Title>
        Ministérios
      </Title>

      <div>
        <Subtitle>
          União de Criançàs Presbiterianas
        </Subtitle>
        <img src={ucpLogo} alt="Logotipo da União Presbiteriana de Crianças" />
        <Text>
          A UCP (União de Crianças Presbiterianas) é uma sociedade interna da IPB que integra e prepara as crianças de forma sólida, visando o crescimento espiritual, físico, intelectual e convívio social, baseado em Lucas 2.52. A UCP é uma escola onde a criança aprende a servir ao Senhor Jesus por meio da Igreja, recebendo noções de diversos cargos, funções e aprendendo a liderar.
        </Text>
      </div>

      <div>
        <Subtitle>
          Sociedade Auxiliadora Feminina
        </Subtitle>
        <img src={safLogo} alt="Logotipo da Sociedade Auxiliadora Feminina" />
        <Text>
          A Igreja Presbiteriana chegou ao Brasil em 1859 com o jovem missionário americano Ashbel Green Simonton e, desde então, encontramos pequenos grupos de mulheres presbiterianas, surgindo cá e lá, para auxiliar no trabalho de cada congregação que ia sendo implantada. A Igreja crescia e se organizava. Ao mesmo tempo, também o trabalho feminino (SAF - Sociedade Auxiliadora Femininas) crescia e não demorou muito a organização em Sociedades Femininas, assim denominadas, ou funcionando sob outro título, mas sempre com o desejo de auxiliar cada igreja, cada congregação, consciente de seu papel como parte do Corpo de Cristo.
        </Text>
      </div>

      <div>
        <Subtitle>
          União Presbiteriana de Homens
        </Subtitle>
        <img src={uphLogo} alt="Logotipo da União Presbiteriana de Homens" />
        <Text>
          A organização da UPH (União Presbiteriano de Homens) é relativamente recente. No entanto os homens tiveram, desde o inicio da história Bíblica, uma atuação extremamente destacada. Tanto no Velho Testamento como no Novo Testamento, vemos os varões ocuparem as mais importantes funções da sociedade, especialmente no âmbito da família, do governo e da religião.
        </Text>
      </div>

      <div>
        <Subtitle>
          Ministério de Recepção
        </Subtitle>
        <img src={recepcaoLogo} alt="Logotipo do Ministério de Recepção" />
        <Text>
          Desde os tempos da igreja primitiva é possível perceber uma preocupação sobre como receber e tratar bem as pessoas. O livro de Atos menciona: “Tendo eles chegado a Jerusalém, foram bem recebidos pela igreja…” Atos 15:4. 

          Crendo que a recepção é uma ferramenta genuína na conversão de almas, o Ministério de Recepção vem trabalhando intensamente com objetivo de ajudá-lo na construção de uma nova filosofia de recepção – não uma equipe, mas uma Igreja Receptiva, Acolhedora. Uma igreja que pratica o método de Cristo, uma igreja isenta de preconceito de cor, raça ou posição social.
        </Text>
      </div>

      <div>
        <Subtitle>
          Ministério de Louvor
        </Subtitle>
        <img src={louvorLogo} alt="Logotipo do Ministério de Louvor" />
        <Text>
          Ao estudarmos sobre a importância do Ministério de Louvor na Igreja,  faz-se necessário percebermos algumas verdades fundamentais, que precisam ser vividas e ensinadas, se desejamos algo sério e aprovado por Deus. 

          A base para esta fundamentação não podem ser experiências, ideias, suposições, etc., e sim a Bíblia, por ser a Palavra de Deus.
        </Text>
      </div>

      <div>
        <Subtitle>
          Ministério de Comunicação
        </Subtitle>
        <img src={comunicacaoLogo} alt="Logotipo do Ministério de Comunicação" />
        <Text>
          Nosso ministério oferece suporte para os demais ministérios da nossa igreja, auxiliando na criação de campanhas, material de divulgação, administração de Redes Sociais, criação de conteúdo e atualização do site, bem como no auxílio na criação de material para nossa igreja. 

          PROPÓSITO (Quem somos e para que existimos)
          O Ministério de Comunicação da Igreja Presbiteriana Astúrias, é aquele responsável pela história, relações públicas, comunicação criativa e mídia.
        </Text>
      </div>
    </MinistriesContainer>
  );
}