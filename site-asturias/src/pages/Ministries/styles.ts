import styled from "styled-components"

export const MinistriesContainer = styled.section`
  padding: 10rem 1.5rem;
  background-color: ${props => props.theme.colors.white};

  p {
    color: ${props => props.theme.colors.black};
  }

  img {
    align-self: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;