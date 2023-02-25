import styled from "styled-components";
import bibleBg from "../../assets/background/bible.jpg"
import { SectionContainer } from "../Section/styles";

export const StudyContainer = styled(SectionContainer)`
  background-image: url(${bibleBg});
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
    background-color: ${props => props.theme.colors["black-opacity-60%"]};
  }
`;