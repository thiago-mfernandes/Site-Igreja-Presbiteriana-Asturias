import styled, { css } from "styled-components";

interface SectionContainerProps {
  pathname?: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: 10rem 1.5rem;

  ${({pathname}) => pathname === '/' && css`
    padding: 40rem 1.25rem 10rem;
    background-color: ${props => props.theme.colors["green-300-d"]};
    color: ${props => props.theme.colors.white};  
  `}
`;