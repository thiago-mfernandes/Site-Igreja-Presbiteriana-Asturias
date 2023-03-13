import Link from "next/link";
import { useRouter } from "next/router";
import devotionalList from "@/data/devotional.json"
import DevotionalCard from "@/components/DevotionalCard";
import { PageHeader } from "@/components/PageHeader";
import { SingleDevotionalContainer } from "./styles";

export default function Devotional() {

  const { query } = useRouter();
  const devotionalId = query.id;
  const devotionalItem = devotionalList.filter(item => item.id === Number(devotionalId))

  return (
    <>
      <PageHeader />
      <SingleDevotionalContainer>
        <Link href="/devotional">Voltar</Link> 
        
        <span>aqui na verdade eu preciso mostrar o texto por completo com a imagem</span>
        <p>imagem</p>
        <p>titulo</p>
        <p>data</p>
        <p>referencia/texto biblico por extenso</p>
        <p>texto</p>
        {
          devotionalItem.map((item) => (
            <DevotionalCard 
              key={item.id}
              id={item.id}
              title={item.title} 
            />   
          ))
        } 

      </SingleDevotionalContainer>
    </>
  )
}