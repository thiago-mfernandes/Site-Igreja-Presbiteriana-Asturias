import styled from "styled-components";
import { device } from "../../styles/default";
import { SectionContainer } from "../Section/styles";

export const ContainerUpcomingEvents = styled(SectionContainer)`

  @media ${device.laptop} {
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h3 {
      width: 100%;
    }

    div {
      width: 47.5%;

      div {
        width: 100%;
      }
    }

  }
`;