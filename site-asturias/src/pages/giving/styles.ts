import styled from "styled-components";
import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";

const GivingContainer = styled(SectionContainer)`
  position: relative;

  @media ${device.laptop} {
    flex-direction: column;
  }

  button {
    margin-bottom: 5rem;
    @media ${device.laptop} {
      width: 50%;
      align-self: center;
  }
  }
  
  button svg {
    margin-left: 10px;
  }
`;

export default GivingContainer