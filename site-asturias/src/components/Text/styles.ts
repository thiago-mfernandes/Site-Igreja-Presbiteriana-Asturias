import styled, { css } from "styled-components"

interface StyledTextProps {
  textColor: 'white' | 'black';
}

export const StyledText = styled.p<StyledTextProps>`
  margin-bottom: 1.75rem;
  font-size: 1.3rem;
  opacity: 0.8;
  line-height: 1.857;
  text-align: justify;
  font-weight: 500;
  
  ${props => props.textColor === 'white' && css`
    color: ${props => props.theme.colors.white}
  `}

  ${props => props.textColor === 'black' && css`
    color: ${props => props.theme.colors.black}
  `}
`;