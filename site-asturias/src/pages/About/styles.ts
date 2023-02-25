import styled from "styled-components"
import { TextBlock } from "../../components/TextBlock/styles";

export const AboutContainer = styled.section`
  padding: 10rem 1.5rem;
  background-color: ${props => props.theme.colors.white};

  p {
    color: ${props => props.theme.colors.black};
  }
`;


export const SectionTextBlock = styled(TextBlock)`
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }

  img {
    align-self: center;
    width: 50%;
    margin-bottom: 2.5rem;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    width: 100%;

    padding: 0 1rem;
    margin: 1rem 0;

    font-family: ${props => props.theme.fonts.montserrat};
    color: ${props => props.theme.colors["gray-900"]};
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: .3rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    text-align: center;
    white-space: wrap;

    border: 0;
    background-color: ${props => props.theme.colors["green-300-d"]};

    transition: all .3s ease-in-out;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;