import { CalendarCheck, Clock, MapPin } from "phosphor-react";
import { Title } from "../Title";
import { Text } from "../Text";
import { EventContainer } from "./styles";

export function Event() {
  return(
    <EventContainer>
      <Title>2023 Kids Church Camp.</Title>
      <Text>
        Et consequatur nihil odio odit voluptatem qui. Dolores doloribus cupiditate totam esse dolores quod. Magni aut incidunt fugiat labore est ut non ipsam nihil. Voluptate rerum dolores unde voluptas. Et similique praesentium dolor. Et quod eius sint at quae est dolores. Beatae quo facere hic.
      </Text>

      <ul>
        <li>
          <CalendarCheck  size={24} />
          <span>20 de Fevereiro de 2023</span>
        </li>
        <li>
          <Clock size={24} />
          <span>8:00 | 18:00</span>
        </li>
        <li>
          <MapPin size={38} />
          <span>Av. Luiz Pereira Leite, 775 Jd. Astúrias</span>
        </li>
      </ul>
    </EventContainer>
  );
}