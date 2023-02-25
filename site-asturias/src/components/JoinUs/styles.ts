import styled from "styled-components"
import { SectionContainer } from "../Section/styles";

export const ScheduleSection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors["gray-900-opacity-20%"]};
`;

export const ContainerContent = styled.div`
  padding-bottom: 1rem;
`;