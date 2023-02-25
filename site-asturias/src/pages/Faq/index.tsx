import { Accordion } from "../../components/Accordion";
import { PageHeader } from "../../components/PageHeader";
import { FaqContainer } from "./styles";
import dataFaq from '../../data/faq.json'
import { Subtitle } from "../../components/Subtitle";
import { Text } from "../../components/Text";
import { SocialMedia } from "../../components/SocialMedia";
import { motion } from "framer-motion"

export function Faq() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageHeader />
      <FaqContainer>
        <Subtitle>O que você pode esperar:</Subtitle>
        {
          dataFaq.map((item) => (
            <Accordion id={item.id} title={item.title} content={item.content} />
          ))
        }
        <Text>
          Se você ainda tem alguma dúvida, por favor entre em contato conosco através das nossas redes sociais ou dirija-se à nossa página de contato. 
        </Text>
      </FaqContainer>
      <SocialMedia />
    </motion.div>
  );
}