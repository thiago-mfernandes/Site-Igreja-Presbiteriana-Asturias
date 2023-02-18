import { Event } from "../Event";
import { Subtitle } from "../Subtitle";
import { UpcomingSection } from "./styles";

export function UpComingEvents() {
  return (
    <UpcomingSection>
      <Subtitle>Próximos Eventos</Subtitle>
      <Event />
      <Event />
      <Event />
      <Event />
    </UpcomingSection>
  );
}