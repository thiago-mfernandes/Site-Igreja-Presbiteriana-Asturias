import styled from "styled-components"
import { device } from "../../../styles/default";

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

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;

export const FollowUs = styled.div`

  @media ${device.tablet} {
    height: 100vh;
    width: 5.5rem;
    background-color: #000000;
    opacity: .9;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(-90deg) translate3d(0, 5.8rem, 0);
      list-style: none;
      font-family: ${props => props.theme.fonts.montserrat};
      font-size: .9rem;
      line-height: 0.8rem;
      text-transform: uppercase;
      letter-spacing: .4rem;
      color: #ffffff;
      margin: 0;
      position: absolute;
      bottom: 4.8rem;
      left: -40px;
      -webkit-transform: rotate(-90deg) translate3d(0, 6.2rem, 0);
      transform: rotate(-90deg) translate3d(0, 6.2rem, 0);
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;

      li {
        padding-left: 0.4rem;
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: none;
        letter-spacing: 0;
        padding-right: 4rem;
        margin-right: 0.8rem;
        position: relative;
        display: inline-block;
        margin-right: 1.2rem;

        a {

        }
      }
    }

  }
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media ${device.tablet} {
    width: 80%;
    margin-left: 5rem;
  }

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

      @media ${device.tablet} {
        display: none;
      }
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