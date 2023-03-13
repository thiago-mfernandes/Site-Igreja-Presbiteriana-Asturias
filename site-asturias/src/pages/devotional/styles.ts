import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";
import styled from "styled-components";

export const DevotionalContainer = styled(SectionContainer)`
  
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${device.laptop} {
    justify-content: flex-start;
  }

  h2 {
    width: 100%;
  }

`;

export const SingleDevotionalContainer = styled(SectionContainer)`
  flex-direction: column;
`;