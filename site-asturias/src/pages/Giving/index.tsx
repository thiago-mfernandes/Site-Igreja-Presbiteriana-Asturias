import { ArrowSquareOut, Link } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { LinkButton } from "../../components/LinkButton";
import { PageHeader } from "../../components/PageHeader";
import { Subtitle } from "../../components/Subtitle";
import { Text } from "../../components/Text";
import { Verse } from "../../components/Verse";
import { GivingContainer } from "./styles";
import { motion } from "framer-motion"

export function Giving() {
  const { pathname } = useLocation();
  return(
      <motion.div      
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <PageHeader />
        <GivingContainer>
          <Verse 
            verse="Todavia, assim como vocês se destacam em tudo: na fé, na palavra, no conhecimento, na dedicação completa e no amor que vocês têm por nós, destaquem-se também neste privilégio de contribuir."
            citation="2 Corintios 8:7 - ESV"
          />
          <Subtitle>
            O que a bilbia diz sobre os dizimos e ofertas?
          </Subtitle>
          <Text>
            Dar o dízimo é reconhecer que tudo aquilo que nós temos vem do Senhor. Significa devolver uma pequena parte de tudo aquilo que Deus derrama nas nossas vidas. Quando temos um coração grato, certamente damos com alegria.
            <br /><br />
            O dinheiro não é uma coisa má: é neutra, ou seja, com ele podemos fazer coisas boas ou más. Se nós amamos o dinheiro, certamente não amamos a Deus. Assim, quando somos capazes de entregar para Deus parte do nosso dinheiro, estamos confiando n'Ele e quebrando o poder do dinheiro nas nossas vidas.
          </Text>
          <LinkButton 
            isGivingPage={pathname === '/giving' && true}
            variantBackgroundColor="gray"
          >
            <a href="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=b4c3ab66f5d098d4a68fa47749890c435ab6398b59ff29bf9544471606c9134b&e=true#rmcl" target="_blank">
              Ofertar
            </a>
            <ArrowSquareOut size={24} />
          </LinkButton>
          <Subtitle>
            TRANSFERÊNCIA POR PIX
          </Subtitle>
          <Text>
            Se preferir, contamos com a opção de transferência por PIX:
            <br />
            32.085.197/0001-03
          </Text>
        </GivingContainer>      
      </motion.div>
  );
}