import { device } from "@/styles/default";
import styled, { css } from "styled-components";
import { ShowMenuProps } from "../interfaces";

export const ContainerNavigationLinks = styled.nav<ShowMenuProps>`
  font-family: ${({theme}) => theme.fonts.montserrat};
  display: ${({ showMenu }) => showMenu ? 'block' : 'none'};
  background-color: ${({theme}) => theme.colors["gray-900-opacity-90%"]};
  height: auto;
  width: 100%;
  padding: 10rem 2.5rem 2.5rem;
  position: absolute;
  top: -5rem;
  left: 0;
  overflow: hidden;
  z-index: 100;

  @media ${device.tablet} {
    padding: 12rem 5.5rem 2.5rem;
  }

  @media ${device.laptop} {
    display: block;
    top: 3.5rem;
    left: 15rem;
    background-color: transparent;
    padding: 0;  
    width: 80%;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    
    margin: 0 0 1rem 0;
    border-top: 1px solid ${({theme}) => theme.colors["black-opacity-60%"]};

    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-between;
      border-top: 0;
    }

    li {
      margin: 0;
      border-bottom: 1px solid ${({theme}) => theme.colors["white-opacity-005%"]};
      
      @media ${device.tablet} {
        display: flex;
        align-items: center;
        //height: 5rem;
      }
      
      @media ${device.laptop} {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 0;
        margin-right: 10px;
        width: 100%;
      }

      a {
        letter-spacing: 0.30rem;
        text-transform: uppercase;
        //line-height: 3rem;
        line-height: 12px;
        color: ${({theme}) => theme.colors.white};
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
        //word-wrap: break-word;

        @media ${device.laptop} {
          font-weight: 700;
          font-size: 0.65rem;
          cursor: pointer;
          ${({ isHomePage }) => isHomePage === '/' && css`
            color: ${({theme}) => theme.colors.black};          
          `}

        }

        &:hover {
          color: ${({theme}) => theme.colors.black};
          opacity: 1;

          @media ${device.laptop} {
            color: ${({theme}) => theme.colors["green-300-d"]};
          }
        }
      }
    } 
  }
`;