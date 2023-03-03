import styled from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input, textarea {
    height: 3rem;
    padding: 10px;
    border: 0;
    outline: none;
    color: ${props => props.theme.colors.black};
    font-size: 1.25rem;
    line-height: 3.2rem;
    border-bottom: 1px solid ${props => props.theme.colors["black-opacity-40%"]};
    transition: all .3s ease-in-out;
  }

  textarea {
    height: 10rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 100%;
    margin: 1rem 0;
    font-family: ${props => props.theme.fonts.montserrat};
    color: ${props => props.theme.colors.black};
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: .3rem;
    line-height: 3.5rem;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    border: 0;
    background-color: ${props => props.theme.colors["green-100"]};
    transition: all .3s ease-in-out;
  }
`;