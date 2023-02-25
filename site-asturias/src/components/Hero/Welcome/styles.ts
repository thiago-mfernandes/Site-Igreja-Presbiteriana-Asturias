import styled from "styled-components"

interface TitleContainerProps {
  showMenu: boolean;
}

export const WelcomeContainer = styled.div`
  width: 80%;
  height: auto;
  overflow: hidden;
  background-color: transparent;
  position: absolute;
  top: 8rem;
`;

export const FollowUs = styled.div`
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  h1 {
    font-family: ${props => props.theme.fonts.montserrat};
    font-weight: 700;
    font-size: 3rem;
    color: ${props => props.theme.colors["gray-900"]};
    text-align: center;
    text-transform: uppercase;
    margin: 3.5rem 0 2.5rem;
    transition: all .3s ease-in-out;
    opacity: ${({showMenu}) => showMenu ? 0.5 : 1};

    &::before {
      display: block;
      content: "";
      height: 2px;
      width: 90%;
      background-color: ${props => props.theme.colors["gray-900"]};
      position: absolute;
      top: 0;
      left: 5%;
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  width: 100%;

  a {
    width: 100%;
  }
`;