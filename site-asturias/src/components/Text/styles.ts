import styled, { css } from "styled-components"
import { StyledTextProps } from "./interfaces";


export const StyledText = styled.p<StyledTextProps>`
  margin-bottom: 1.75rem;
  font-size: 1.3rem;
  opacity: 0.8;
  line-height: 1.857;
  text-align: justify;
  font-weight: 500;
  
  ${(props) => props.textColor === 'white' && css`
    color: ${({theme}) => theme.colors.white}
  `}

  ${(props) => props.textColor === 'black' && css`
    color: ${({theme}) => theme.colors.black}
  `}
`;