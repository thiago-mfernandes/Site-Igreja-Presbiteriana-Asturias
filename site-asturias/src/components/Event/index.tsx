import { CalendarCheck, Clock, MapPin } from "phosphor-react";
import { Title } from "@/components/Title";
import { Text } from "@/components/Text";
import { EventContainer } from "./styles";
import { EventProps } from "./interfaces";
import Link from "next/link";


export function Event({ address, date, description, id, time, title }: EventProps) {
  return(
    <EventContainer>
      <div key={id}>
        <Link href={`/schedule/${id}`}>
          <Title >
            {title}
          </Title>
        </Link>
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