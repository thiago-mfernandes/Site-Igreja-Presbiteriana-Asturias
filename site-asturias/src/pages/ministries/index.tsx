import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Text } from "@/components/Text";
import { TextBlock } from "@/components/TextBlock/styles";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import logoUpc from "public/assets/logo/ucp_logo.webp";
import logoSaf from "public/assets/logo/logo_saf.png";
import logoUph from "public/assets/logo/logo_uph.png";
import logoRecepcao from "public/assets/logo/logo_recepcao.webp";
import logoLouvor from "public//assets/logo/logo_louvor.webp";
import logoComunicacao from "public//assets/logo/logo_comunicacao.webp";
import Head from "next/head";
import MinistriesContainer from "@/pages/ministries/styles";

export default function Ministries() {
  return(
    <>
      <Head>
        <title>Astúrias | Ministérios</title>
      </Head>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <PageHeader />
        <MinistriesContainer>
          <Title>
            Ministérios
          </Title>

          <TextBlock>
            <Subtitle>
              União de Crianças Presbiterianas
            </Subtitle>
            <Image 
              src={logoUpc} 
              alt="Logotipo da União Presbiteriana de Crianças" 
              width={254} //size of original image
              height={254} 
            />
            <Text>
              A UCP (União de Crianças Presbiterianas) é uma sociedade interna da IPB que integra e prepara as crianças de forma sólida, visando o crescimento espiritual, físico, intelectual e convívio social, baseado em Lucas 2.52. A UCP é uma escola onde a criança aprende a servir ao Senhor Jesus por meio da Igreja, recebendo noções de diversos cargos, funções e aprendendo a liderar.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Sociedade Auxiliadora Feminina
            </Subtitle>
            <Image 
              src={logoSaf} 
              alt="Logotipo da Sociedade Auxiliadora Feminina" 
              width={235} 
              height={260} 
            />
            <Text>
              A Igreja Presbiteriana chegou ao Brasil em 1859 com o jovem missionário americano Ashbel Green Simonton e, desde então, encontramos pequenos grupos de mulheres presbiterianas, surgindo cá e lá, para auxiliar no trabalho de cada congregação que ia sendo implantada. A Igreja crescia e se organizava. Ao mesmo tempo, também o trabalho feminino (SAF - Sociedade Auxiliadora Femininas) crescia e não demorou muito a organização em Sociedades Femininas, assim denominadas, ou funcionando sob outro título, mas sempre com o desejo de auxiliar cada igreja, cada congregação, consciente de seu papel como parte do Corpo de Cristo.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              União Presbiteriana de Homens
            </Subtitle>
            <Image 
              src={logoUph} 
              alt="Logotipo da União Presbiteriana de Homens" 
              width={2495} 
              height={551} 
            />
            <Text>
              A organização da UPH (União Presbiteriano de Homens) é relativamente recente. No entanto os homens tiveram, desde o inicio da história Bíblica, uma atuação extremamente destacada. Tanto no Velho Testamento como no Novo Testamento, vemos os varões ocuparem as mais importantes funções da sociedade, especialmente no âmbito da família, do governo e da religião.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Ministério de Recepção
            </Subtitle>
            <Image 
              src={logoRecepcao} 
              alt="Logotipo do Ministério de Recepção" 
              width={280} 
              height={196} 
            />
            <Text>
              Desde os tempos da igreja primitiva é possível perceber uma preocupação sobre como receber e tratar bem as pessoas. O livro de Atos menciona: “Tendo eles chegado a Jerusalém, foram bem recebidos pela igreja…” Atos 15:4. 
              <br/><br/>
              Crendo que a recepção é uma ferramenta genuína na conversão de almas, o Ministério de Recepção vem trabalhando intensamente com objetivo de ajudá-lo na construção de uma nova filosofia de recepção – não uma equipe, mas uma Igreja Receptiva, Acolhedora. Uma igreja que pratica o método de Cristo, uma igreja isenta de preconceito de cor, raça ou posição social.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Ministério de Louvor
            </Subtitle>
            <Image 
              src={logoLouvor} 
              alt="Logotipo do Ministério de Louvor" 
              width={444} 
              height={203} 
            />
            <Text>
              Ao estudarmos sobre a importância do Ministério de Louvor na Igreja,  faz-se necessário percebermos algumas verdades fundamentais, que precisam ser vividas e ensinadas, se desejamos algo sério e aprovado por Deus. 
              <br/><br/>
              A base para esta fundamentação não podem ser experiências, ideias, suposições, etc., e sim a Bíblia, por ser a Palavra de Deus.
            </Text>
          </TextBlock>

          <TextBlock>
            <Subtitle>
              Ministério de Comunicação
            </Subtitle>
            <Image 
              src={logoComunicacao} 
              alt="Logotipo do Ministério de Comunicação" 
              width={256} 
              height={199} 
            />
            <Text>
              Nosso ministério oferece suporte para os demais ministérios da nossa igreja, auxiliando na criação de campanhas, material de divulgação, administração de Redes Sociais, criação de conteúdo e atualização do site, bem como no auxílio na criação de material para nossa igreja. 
              <br/><br/>
              PROPÓSITO (Quem somos e para que existimos):
              O Ministério de Comunicação da Igreja Presbiteriana Astúrias, é aquele responsável pela história, relações públicas, comunicação criativa e mídia.
            </Text>
          </TextBlock>
        </MinistriesContainer>
      </motion.div>
    </>
  );
}