import { Event } from "../Event";
import { Subtitle } from "../Subtitle";
import { ScheduleSection } from "./styles";

export function Schedule() {
  return (
    <ScheduleSection>
      <Subtitle>Próximos Eventos</Subtitle>

      <Event />
      <Event />
      <Event />
      <Event />
    </ScheduleSection>
  );
}