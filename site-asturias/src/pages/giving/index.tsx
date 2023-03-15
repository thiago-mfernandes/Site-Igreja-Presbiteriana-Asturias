import { ArrowSquareOut } from "phosphor-react";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";
import { Subtitle } from "@/components/Subtitle";
import { Text } from "@/components/Text";
import { Verse } from "@/components/Verse";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import GivingContainer from "@/pages/giving/GivingContainerStyles";
import CardTransferInfo from "./CardTransferInfoStyles";

export default function Giving() {
  const { pathname } = useRouter();

  return(
    <>
      <Head>
        <title>Astúrias | Ofertas</title>
      </Head>
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
            <Link href="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=b4c3ab66f5d098d4a68fa47749890c435ab6398b59ff29bf9544471606c9134b&e=true#rmcl" target="_blank">
              Ofertar
            </Link>
            <ArrowSquareOut size={24} />
          </LinkButton>

          <div data-container-transferInfos>
            <CardTransferInfo>
              <Subtitle>
                TRANSFERÊNCIA POR PIX
              </Subtitle>
              <Text>
                Se preferir, contamos com a opção de transferência por PIX:
                <br />
                32.085.197/0001-03
              </Text>
            </CardTransferInfo>
            <CardTransferInfo>
            <Subtitle>
                Conta Oficial
              </Subtitle>
              <Text>
                PagSeguro<br />
                Agência: 0001<br />
                Conta Corrente: 23728407-0<br />
                Banco: 290
              </Text>
            </CardTransferInfo>
          </div>

        </GivingContainer>      
      </motion.div>
    </>
  );
}