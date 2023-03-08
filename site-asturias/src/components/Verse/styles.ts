import styled, { css } from "styled-components"
import { VerseContentProps } from "./interfaces"


export const VerseContent = styled.blockquote<VerseContentProps>`
  margin: 4rem 0;
  padding: 2.8rem 2.8rem;
  border-left: 4px solid ${({theme}) => theme.colors.black};
  ${({changeColorOfBorderLeft}) => changeColorOfBorderLeft && css`
  border-left: 4px solid ${({theme}) => theme.colors.white};
  `}
  position: relative;
  font-style: italic;

  cite {
    border: none;

    font-family: ${({theme}) => theme.fonts.montserrat};
    font-size: 1.2rem;
    font-style: normal;
    line-height: 1.333;
  }
`