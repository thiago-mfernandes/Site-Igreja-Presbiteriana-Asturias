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
      height: auto;
    }
  }

  img[data-preacher-img] {
    width: 100%;
    height: 100%;

    @media ${device.tablet} {
      width: 75%;
      align-self: center;
    }

    @media ${device.laptop} {
      width: 40%;
      align-self: center;
    }
  }
`;

export default AboutContainer;