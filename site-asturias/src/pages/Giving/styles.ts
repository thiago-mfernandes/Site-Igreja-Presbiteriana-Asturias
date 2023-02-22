import styled from "styled-components"

export const GivingContainer = styled.section`
  padding: 10rem 1.5rem;
  background-color: ${props => props.theme.colors.white};
  position: relative;

  button {
    margin-bottom: 5rem;
  }
  
  button svg {
    margin-left: 10px;
  }
`;