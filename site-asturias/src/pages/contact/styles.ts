import styled from "styled-components";
import { SectionContainer } from "../../components/Section/styles";
import { device } from "@/styles/default";

const ContactContainer = styled(SectionContainer)`

  @media ${device.laptop} {
    flex-direction: column;
  }

  button {
    @media ${device.laptop} {
      width: 50%;
      align-self: center;
    }
  }
`;

export default ContactContainer;