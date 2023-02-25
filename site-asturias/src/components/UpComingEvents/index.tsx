import { Event } from "../Event";
import { Subtitle } from "../Subtitle";
import { UpcomingSection } from "./styles";

import events from '../../data/events.json'
import { useLocation } from "react-router-dom";
import { Pagination } from "../Pagination";
import { useState } from "react";

export function UpComingEvents() {

  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const eventsOfHomePage = events.filter((event, index) => {
    return index < 4;
  })

  return (
    <UpcomingSection>
      <Subtitle>Próximos Eventos</Subtitle>
      {
        pathname === '/' 
        ?
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
          :
          events.map((event) => (
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
      {/* <Pagination totalCountOfPages={events.length}  currentPage={page} onPageChange={setPage} /> */}
    </UpcomingSection>
  );
}
