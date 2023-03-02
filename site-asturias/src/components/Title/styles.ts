import styled, { css } from "styled-components"
import { StyledTitleProps } from "./interfaces";

export const StyledTitle = styled.h2<StyledTitleProps>`
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1.75rem;
  position: relative;

  ${props => props.textColor === 'white' && css`
    color: ${props => props.theme.colors.white}
  `}

  ${props => props.textColor === 'green' && css`
    color: ${props => props.theme.colors["green-500"]}
  `}
`;