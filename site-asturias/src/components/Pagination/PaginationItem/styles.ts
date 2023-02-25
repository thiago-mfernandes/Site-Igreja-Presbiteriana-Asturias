import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 32px;
  font-size: 1rem;
  color: aquamarine;
  ${({disabled}) => disabled && css`
    background-color: blue;
    cursor: default;
  `}

  ${({disabled}) => !disabled && css`
    background-color: red;
    :hover{
      background-color: brown;
    }
  `}
`;
