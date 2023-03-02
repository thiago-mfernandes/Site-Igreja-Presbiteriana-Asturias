import { PageHeader } from "@/components/PageHeader";
import { Subtitle } from "@/components/Subtitle";
import { Text } from "@/components/Text";
import { Verse } from "@/components/Verse";
import { motion } from "framer-motion"
import { LoginContainer } from "./styles";

export default function Login(){
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageHeader />
      <LoginContainer>
        <Subtitle>
          Software em Construção
        </Subtitle>
        <Text>
          O sistema de gestão e comunicação está em desenvolvimento. Aguardem novidades.
        </Text>
        <Verse 
          citation="I Pedro 4:10-11" 
          verse="Cada um exerça o dom que recebeu para servir aos outros, administrando fielmente a graça de Deus em suas múltiplas formas. Se alguém fala, faça-o como quem transmite a palavra de Deus. Se alguém serve, faça-o com a força que Deus provê, de forma que em todas as coisas Deus seja glorificado mediante Jesus Cristo, a quem sejam a glória e o poder para todo o sempre. Amém." 
        />
        <Text>
            Deus seja louvado!
        </Text>
      </LoginContainer>
    </motion.div>
  )
}