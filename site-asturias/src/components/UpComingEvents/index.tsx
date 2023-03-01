import { Event } from "../Event";
import { Subtitle } from "../Subtitle";
import { useLocation } from "react-router-dom";
import { SectionContainer } from "../Section/styles";

import events from '../../data/events.json';


export function UpComingEvents() {

  const { pathname } = useLocation();
  const eventsOfHomePage = events.filter((event, index) => {
    return index < 4;
  })

  return (
    <SectionContainer>
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
    </SectionContainer>
  );
}
