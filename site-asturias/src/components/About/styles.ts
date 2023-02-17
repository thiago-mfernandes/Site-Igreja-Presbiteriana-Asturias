import styled from "styled-components";

export const ContainerSection = styled.section`
  padding: 55rem 1.25rem 10rem;
  background-color: ${props => props.theme.colors["green-300-d"]};
  color: ${props => props.theme.colors["white-opacity-80%"]};  
`;

export const WelcomeWords = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  h2 {
    color: ${props => props.theme.colors["gray-900"]};
    font-family: ${props => props.theme.fonts.montserrat};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: .3rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: ${props => props.theme.fonts.lora};
    color: ${props => props.theme.colors["white-opacity-80%"]};
    font-weight: 500;
    line-height: 1.250;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: justify;
  }

  a {
    margin-bottom: 1rem;
  }
`;

export const MainServices = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${props => props.theme.colors["white-opacity-40%"]};
  }
`;

export const Service = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors["white-opacity-40%"]};
  padding-top: 2rem;
  padding-bottom: 2rem;

  h3 {
    font-size: 1.125rem;
    line-height: 1.333;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
  }

  span {
    font-family: ${props => props.theme.fonts.lora};
    color: ${props => props.theme.colors["white-opacity-80%"]};
    line-height: 1.8;
    font-size: 1.35rem;
    &:last-child {
      margin-bottom: 10rem;
    }
  }
`;