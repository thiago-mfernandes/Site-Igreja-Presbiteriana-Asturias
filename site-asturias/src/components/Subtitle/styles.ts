import styled, { css } from "styled-components"
import { StyledTextProps } from "./interfaces";

export const StyledSubtitle = styled.h3<StyledTextProps>`
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  margin-bottom: 1.5rem;
  position: relative;

  ${props => props.textColor === 'white' && css`
    color: ${props => props.theme.colors.white}
  `}

  ${props => props.textColor === 'black' && css`
    color: ${props => props.theme.colors.black}
  `}

  ${props => props.textColor === 'green' && css`
    color: ${props => props.theme.colors["green-500"]}
  `}

`;
