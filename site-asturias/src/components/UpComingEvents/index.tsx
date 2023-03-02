import { useRouter } from "next/router";
import { Event } from "@/components/Event";
import { Subtitle } from "@/components/Subtitle";
import { ContainerUpcomingEvents } from "./styles";

import events from '@/data/events.json';


export function UpComingEvents() {

  const { pathname } = useRouter();
  const eventsOfHomePage = events.filter((event, index) => {
    return index < 4;
  })

  return (
    <ContainerUpcomingEvents>
      <Subtitle>Próximos Eventos</Subtitle>
        {
          pathname === '/' &&
            eventsOfHomePage.map((event) => (
              <Event 
                key={event.id}
                address={event.address} 
                date={event.date} 
                description={event.description} 
                id={event.id} 
                title={event.title} 
                time={event.time} 
              />
            ))
        }
    </ContainerUpcomingEvents>
  );
}
