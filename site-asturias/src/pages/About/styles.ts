import styled from "styled-components"

export const AboutContainer = styled.section`
  padding: 10rem 1.5rem;
  background-color: ${props => props.theme.colors.white};

  p {
    color: ${props => props.theme.colors.black};
    &:not(:last-of-type)::first-letter {
      float: left;
      font-weight: 700;
      font-size: 3.6em;
      line-height: 1;
      padding: 0 0.125em 0 0;
      text-transform: uppercase;
    }
  }
`;