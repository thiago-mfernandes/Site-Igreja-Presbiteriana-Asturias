import Link from "next/link";
import { useRouter } from "next/router";
import devotionalList from "@/data/devotional.json";
import { PageHeader } from "@/components/PageHeader";
import { SingleDevotionalContainer } from "./styles";
import { LinkButton } from "@/components/LinkButton";
import { DevotionalItem } from "@/components/DevotionalItem";
import devotionalThumbnailItem from "../../../public/assets/background/bible.jpg";
import Head from "next/head";

export default function Devotional() {

  const { query } = useRouter();
  const devotionalId = query.id;
  const devotionalItem = devotionalList.filter(item => item.id === Number(devotionalId))

  return (
    <>
      <Head>
        <title>{`Devocional Diário | ${devotionalId}`}</title>
      </Head>

      <PageHeader />
      <SingleDevotionalContainer>
        <LinkButton>
          <Link href="/devotional">Voltar</Link> 
        </LinkButton>
        {
          devotionalItem.map((item) => (
            <DevotionalItem 
              key={item.id}
              img_src={devotionalThumbnailItem} 
              title={item.title} 
              date_publication={item.date_publication} 
              citation={item.citation} 
              text={item.text}        
            />
          ))
        }        
      </SingleDevotionalContainer>
    </>
  )
}