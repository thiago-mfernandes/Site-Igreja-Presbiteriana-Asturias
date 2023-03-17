import styled from "styled-components";
import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";

const ContactContainer = styled(SectionContainer)`

  @media ${device.laptop} {
    flex-direction: column;
  }

  button {
    background-color: ${({ theme }) => theme.colors["green-300-d"]};
    @media ${device.laptop} {
      width: 500px;
      align-self: flex-start;
      margin-bottom: 2.5rem;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  h3 {
    @media ${device.laptop} {
      width: 100%;
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  button {
    background-color: ${({ theme }) => theme.colors["green-300-d"]};
    @media ${device.laptop} {
      width: 22.5%;
      font-size: 0.55rem;
      letter-spacing: 0.20rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
        margin-left: 10px;
        margin-bottom: 5px;
      }
    }
  }
`;

export default ContactContainer;