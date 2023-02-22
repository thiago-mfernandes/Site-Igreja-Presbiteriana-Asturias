import { CalendarCheck, Clock, MapPin } from "phosphor-react";
import { Title } from "../Title";
import { Text } from "../Text";
import { EventContainer } from "./styles";

interface EventProps {
  address: string;
  date: string;
  description: string;
  id: number;
  title: string;
  time: string;
}

export function Event({ address, date, description, id, time, title }: EventProps) {
  return(
    <EventContainer>
      <div key={id}>
        <Title >
          {title}
        </Title>
        <Text>
          {description}
        </Text>

        <ul>
          <li>
            <CalendarCheck  size={24} />
            <span>
              {date}
            </span>
          </li>
          <li>
            <Clock size={24} />
            <span>
              {time}
            </span>
          </li>
          <li>
            <MapPin size={38} />
            <span>
              {address}
            </span>
          </li>
        </ul>          
      </div>
    </EventContainer>
  );
}