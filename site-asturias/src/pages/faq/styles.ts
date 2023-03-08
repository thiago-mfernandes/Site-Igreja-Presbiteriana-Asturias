import styled from "styled-components";
import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";

const FaqContainer = styled(SectionContainer)`
  
  @media ${device.laptop} {
    flex-direction: column;
  }

  p {
    margin-top: 3rem;
  }
`;

export default FaqContainer