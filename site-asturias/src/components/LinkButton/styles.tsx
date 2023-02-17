import styled, { css } from "styled-components";

interface StyledAnchorProps {
  bgColor?: 'transparent' | 'cinza' | 'verde';
  applyBorder?: boolean;
  colorLetter?: string;
}
 

export const StyledAnchor = styled.a<StyledAnchorProps>`
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  height: 3.5rem;
  line-height: 3.5rem;
  padding: 0 3.2rem;
  margin: 1rem 0;
  color: ${props => props.theme.colors["gray-900"]};
  text-align: center;
  white-space: nowrap;
  transition: all .3s ease-in-out;
  -webkit-font-smoothing: antialiased;
  background-color: ${({bgColor}) => bgColor ? bgColor : 'transparent'};

  ${props => props.bgColor === 'cinza' && css`
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  `}

  ${props => props.bgColor === 'transparent' && css`
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  `}

  ${props => props.bgColor === 'verde' && css`
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  `}

  ${props => props.applyBorder && css`
    border: 1px solid ${props => props.theme.colors["gray-900"]};
  `}
  
  
  &:hover {
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  }

`;