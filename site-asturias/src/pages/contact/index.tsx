import { LinkButton } from "@/components/LinkButton";
import { MapLocation } from "@/components/MapLocation";
import { PageHeader } from "@/components/PageHeader";
import { SocialMedia } from "@/components/SocialMedia";
import { Subtitle } from "@/components/Subtitle";
import { Text } from "@/components/Text";
import { TextBlock } from "@/components/TextBlock/styles";
import { Title } from "@/components/Title";
import ContactContainer, { ContainerButtons } from "@/pages/contact/styles";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Astúrias | Contato</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <PageHeader />
        <ContactContainer>
          <TextBlock>
            <Subtitle>
              Ficaremos felizes em atendê-lo
            </Subtitle>
            <Text>
              Se você deseja obter mais informações sobre a Igreja Presbiteriana Astúrias, ou deseja saber mais sobre como ser cristão, ligue, envie-nos um e-mail ou simplesmente preencha o formulário abaixo. Estamos ansiosos para ouvir de você.
            </Text>
          </TextBlock>

          <TextBlock>
            <Title>
              Atendimento Pastoral
            </Title>
            <Text>
              Pr. Robson Leandro Binotto
              <br />
              (19)&nbsp;98107-4353
              <br />
              Segunda a Quinta Feira | 13h - 17h
            </Text>
          </TextBlock>
          <TextBlock>
            <Title>
              Contato
            </Title>
            <Text>
              contato@ipbasturias.com.br
            </Text>
          </TextBlock>

          <ContainerButtons>
            <Subtitle>
              Clique para receber
            </Subtitle>


            <LinkButton>
              <Link href={`/contact/prayer`}>
                Pedido de Oração
              </Link>
            </LinkButton>
            <LinkButton>
              <Link href={`/contact/counseling`}>
                Aconselhamento
              </Link>
            </LinkButton>
            <LinkButton>
              <Link href={`/contact/contact`}>
                Contato
              </Link>
            </LinkButton>
            <LinkButton>
              <Link href={`/contact/more`}>
                Saber mais sobre Jesus
              </Link>
            </LinkButton>
          </ContainerButtons>

        </ContactContainer>
        <MapLocation />
        <SocialMedia />
      </motion.div>
    </>
  );
}