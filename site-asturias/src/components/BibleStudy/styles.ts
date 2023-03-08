import styled from "styled-components";
import { device } from "@/styles/default";
import { SectionContainer } from "@/components/Section/styles";

export const StudyContainer = styled(SectionContainer)`
  background-image: url("/assets/background/bible.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors["black-opacity-60%"]};
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }
`;