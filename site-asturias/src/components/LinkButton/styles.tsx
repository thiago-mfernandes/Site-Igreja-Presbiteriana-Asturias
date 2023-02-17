import styled from "styled-components";

interface StyledAnchorProps {
  bgColor: string;
  applyBorder?: boolean;
}



export const StyledAnchor = styled.a<StyledAnchorProps>`
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  height: 2rem;
  line-height: 1.6rem;
  padding: 0 3.2rem;
  margin: 1rem 0;
  color: ${props => props.theme.colors["gray-900"]};
  text-align: center;
  white-space: nowrap;
  transition: all .3s ease-in-out;
  -webkit-font-smoothing: antialiased;
  background-color: ${({bgColor}) => bgColor ? bgColor : 'transparent'};
  
  border: ${({applyBorder}) => applyBorder 
    ? `1px solid #121214`
    : 'transparent'
    };
  
  &:hover {
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  }

`;