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

  button {
    background-color: ${({ theme }) => theme.colors["green-300-d"]};
    width: 100%;
    margin-bottom: 5rem;

    @media ${device.laptop} {
      width: 500px;
    }
  }
`;

export const DevotionalIntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
`;