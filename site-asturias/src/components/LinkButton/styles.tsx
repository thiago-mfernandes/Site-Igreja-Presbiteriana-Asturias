import styled, { css } from "styled-components";

interface StyledAnchorProps {
  bgColor?: 'gray' | 'green';
  applyBorder?: boolean;
  colorLetter?: string;
}
 

export const StyledAnchor = styled.button<StyledAnchorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 100%;

  padding: 0 3.2rem;
  margin: 1rem 0;

  font-family: ${props => props.theme.fonts.montserrat};
  color: ${props => props.theme.colors["gray-900"]};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: .3rem;
  line-height: 3.5rem;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;

  border: 0;
  background-color: transparent;

  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  }

  //for background-color changes:

  ${props => props.bgColor === 'gray' && css`
    background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};
  `}

  ${props => props.bgColor === 'green' && css`
    background-color: ${props => props.theme.colors["green-100"]};
  `}

  //for border change:

  ${props => props.applyBorder && css`
    border: 1px solid ${props => props.theme.colors["gray-900"]};
  `}
`;