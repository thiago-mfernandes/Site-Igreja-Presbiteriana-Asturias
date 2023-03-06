import styled from "styled-components"
import { device } from "@/styles/default";
import { SectionContainer } from "@/components/Section/styles";

export const ScheduleSection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors?.white};
  border-bottom: 1px solid ${({theme}) => theme.colors?.["gray-900-opacity-20%"]};
`;

export const ContainerContent = styled.div`
  padding-bottom: 1rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 47.5%;
  }
`;