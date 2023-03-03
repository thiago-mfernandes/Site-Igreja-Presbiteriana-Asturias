
import { LinkButton } from "@/components/LinkButton"
import { PageHeader } from "@/components/PageHeader"
import { Subtitle } from "@/components/Subtitle"
import { Text } from "@/components/Text"
import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import { NotFoundContainer } from "./styles"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Astúrias | Não Encontrada</title>
      </Head>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <PageHeader />
        <NotFoundContainer>
          <Subtitle>Oops! Parece que você esta perdido.</Subtitle>
          <Text>Talvez eu possa te ajudar a encontrar o caminho de volta com alguns links:</Text>
          <Link href="/">
            <LinkButton variantBackgroundColor="green">Home</LinkButton>
          </Link>
          <Link href="/contact">
            <LinkButton variantBackgroundColor="green">Contato</LinkButton>
          </Link>
        </NotFoundContainer>
      </motion.div>
    </>
  )
}
