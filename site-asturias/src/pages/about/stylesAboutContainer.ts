import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";
import styled from "styled-components";

const AboutContainer = styled(SectionContainer)`
  
  p {
    color: ${({theme}) => theme.colors.black};
  }

  @media ${device.laptop} {
    flex-direction: column;

    div img {
      width: 50%;
    }
  }
`;

export default AboutContainer;