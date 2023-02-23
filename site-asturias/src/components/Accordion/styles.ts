
import styled, { css } from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 1px solid ${props => props.theme.colors["black-opacity-40%"]};
  color: ${props => props.theme.colors.white};
  margin-bottom: 0.15rem;
  font-family: ${props => props.theme.fonts.montserrat};
`;

export const AccordionContainer = styled.div`
  width: 100%;
`;


export const Item = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
  background-color: white;
  cursor: pointer;
  padding: 1rem;
`;

interface AccordionProps {
  isActive: boolean;
}

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  color: ${props => props.theme.colors["gray-900"]};
  overflow: hidden;

  span {
    margin-left: 10px;
  }
`;

export const Content = styled.div<AccordionProps>`
  overflow: hidden;
  height: auto;
  max-height: 0;
  color: ${props => props.theme.colors["green-700"]};
  transition: all 0.5s cubic-bezier(1,0,1,0);
  
  ${({ isActive }) => isActive && css`
  max-height: 9999px;
  `};  
`;


