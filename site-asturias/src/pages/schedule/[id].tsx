import { Event } from "@/components/Event";
import { LinkButton } from "@/components/LinkButton";
import { PageHeader } from "@/components/PageHeader";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import events from "@/data/events.json"
import SingleEventContainer from "./styles";

export default function ScheduleItem() {

  const { query } = useRouter();
  const eventId = query.id;
  const event = events.filter(item => item.id === Number(eventId));
  
  return (
    <>
      <Head>
        <title>Astúrias | Detalhes do Evento</title>
      </Head>

      <PageHeader />
      <SingleEventContainer>
        <LinkButton>
          <Link href="/schedule">Voltar</Link>
        </LinkButton>
        {
          event.map(item => (
            <Event
              key={item.id}
              address={item.address}
              date={item.date}
              description={item.description}
              id={item.id}
              title={item.title}
              time={item.time}
            />
          ))
        }
      </SingleEventContainer>
    </>
  )
}