import styled from "styled-components"

export const FormContainer = styled.form`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;

  input, textarea {
    //display: block;
    height: 3rem;
    padding: 10px;
    border: 0;
    outline: none;
    color: ${props => props.theme.colors["gray-900"]};
    font-size: 1.25rem;
    line-height: 3.2rem;
    border-bottom: 1px solid ${props => props.theme.colors["black-opacity-40%"]};
    transition: all .3s ease-in-out;
  }

  textarea {
    height: 10rem;
  }
`;