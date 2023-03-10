import styled, { css } from "styled-components";
import { StyledTitleProps } from "./interfaces";

export const StyledTitle = styled.h2<StyledTitleProps>`
  font-family: ${({theme}) => theme.fonts.gloock};
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1.75rem;
  position: relative;
  letter-spacing: .2rem;

  ${(props) => props.textColor === 'white' && css`
    color: ${({theme}) => theme.colors.white}
  `}

  ${(props) => props.textColor === 'green' && css`
    color: ${({theme}) => theme.colors["green-500"]}
  `}
`;