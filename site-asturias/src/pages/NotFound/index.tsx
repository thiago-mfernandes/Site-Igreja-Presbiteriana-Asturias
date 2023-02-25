import { NavLink } from "react-router-dom"
import { LinkButton } from "../../components/LinkButton"
import { PageHeader } from "../../components/PageHeader"
import { Subtitle } from "../../components/Subtitle"
import { Text } from "../../components/Text"
import { ContainerNotFound } from "./styles"
import { motion } from "framer-motion"

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageHeader />
      <ContainerNotFound>
        <Subtitle>Oops! Parece que você esta perdido.</Subtitle>
        <Text>Talvez eu possa te ajudar a encontrar o caminho de volta com alguns links:</Text>
        <NavLink to="/">
          <LinkButton variantBackgroundColor="green">Home</LinkButton>
        </NavLink>
        <NavLink to="/contact">
          <LinkButton variantBackgroundColor="green">Contato</LinkButton>
        </NavLink>
      </ContainerNotFound>
    </motion.div>
  )
}
