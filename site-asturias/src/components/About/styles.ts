import styled from "styled-components";


export const WelcomeWords = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  a {
    font-size: 1rem;
    color: ${props => props.theme.colors["gray-900"]};
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

  span {
    color: ${props => props.theme.colors["white-opacity-80%"]};
    line-height: 1.8;
    font-size: 1.35rem;
    &:last-child {
      margin-bottom: 10rem;
    }
  }
`;