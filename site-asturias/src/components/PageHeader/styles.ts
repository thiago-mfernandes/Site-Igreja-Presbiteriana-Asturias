import styled from "styled-components";
import { handleBackroundImage } from "@/utils/handleBackgroundImage";
import { PageHeaderContainerProps } from "./interfaces";

export const PageHeaderContainer = styled.header<PageHeaderContainerProps>`
  padding: 15rem 1.25rem 15rem;
  min-height: 25rem;
  text-align: center;
  background-color: ${props => props.theme.colors.black};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${props => props.theme.colors.white};

  ${({ path }) => handleBackroundImage(path)}

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    opacity: .7;
  }
`;