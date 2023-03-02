import styled from "styled-components"
import { device } from "@/styles/default";
import { TitleContainerProps } from "./interfaces";

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
    width: 3.5rem;
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
      margin: 0;
      position: absolute;
      bottom: 4.8rem;
      left: -65px;
      -webkit-transform: rotate(-90deg) translate3d(0, 6.2rem, 0);
      transform: rotate(-90deg) translate3d(0, 6.2rem, 0);
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      
      //1024
      @media ${device.laptop} {
        bottom: 2.8rem;
      }

      li {
        padding-left: 0.4rem;
        padding-right: 4rem;
        margin-right: 0.8rem;
        position: relative;
        display: inline-block;

        @media ${device.laptop} {
          padding-right: 1rem;
        }

        a {
          font-family: ${props => props.theme.fonts.montserrat};
          font-size: .8rem;
          line-height: 0.8rem;
          letter-spacing: .4rem;
          text-transform: uppercase;
          color: ${props => props.theme.colors["white-opacity-40%"]};
          transition: all 0.3s ease-in-out;
          &:hover {
            color: ${props => props.theme.colors.white};
          }

          @media ${device.laptop} {
            font-size: .5rem;
          }
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
    margin-left: 4rem;
  }

  @media ${device.laptopL} {
    margin-top: 10rem;
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

  @media ${device.tablet} {
    align-items: center;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
  }

  a {
    width: 100%;

    @media ${device.tablet} {
      width: 60%;
    }

    @media ${device.laptop} {
      width: 25%;
      &:first-of-type{
        margin-right: 24px;
      }
    }
  }
`;