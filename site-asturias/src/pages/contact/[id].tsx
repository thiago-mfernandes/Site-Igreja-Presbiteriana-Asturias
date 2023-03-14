import { FormContact } from "@/components/Form/Contact";
import { FormCounseling } from "@/components/Form/Counseling";
import { FormMore } from "@/components/Form/More";
import { FormPrayer } from "@/components/Form/Prayer";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ContactContainer from "./styles";

export default function DirectedContact() {

  const { query } = useRouter();
  const typeOfContact = query.id;

  function handleProperForm() {
    switch (typeOfContact) {
      case 'contact':
        return <FormContact />
      case 'prayer':
        return <FormPrayer />
      case 'counseling':
        return <FormCounseling />
      case 'more':
        return <FormMore />
      default:
        return <FormContact />
    }
  }

  return (
    <>
      <Head>
        <title>Astúrias | Tipo de contato</title>
      </Head>
      <PageHeader />
      <ContactContainer>

        <LinkButton>
          <Link href="/contact">Voltar</Link>
        </LinkButton>
        {handleProperForm()}
      </ContactContainer>
    </>
  )
}