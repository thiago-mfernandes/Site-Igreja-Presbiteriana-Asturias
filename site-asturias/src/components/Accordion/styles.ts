import styled, { css } from "styled-components";
import { AccordionContentProps } from "./interfaces";

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors["black-opacity-40%"]};
  color: ${({theme}) => theme.colorswhite};
  margin-bottom: 0.15rem;
  font-family: ${({theme}) => theme.fonts.montserrat};
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

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  color: ${({theme}) => theme.colors.black};
  overflow: hidden;

  span {
    margin-left: 10px;
  }
`;

export const Content = styled.div<AccordionContentProps>`
  overflow: hidden;
  height: auto;
  max-height: 0;
  color: ${({theme}) => theme.colors["green-700"]};
  transition: all 0.5s cubic-bezier(1,0,1,0);
  
  ${({ isActive }) => isActive && css`
    max-height: 9999px;
  `};  
`;


