import styled, { css } from "styled-components";
import { device } from "../../styles/default";
import { LogoContainerProps, MenuHamburguerProps, ShowMenuProps } from "./interfaces";


export const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  justify-content: center;
  width: 30%;
  position: absolute;
  z-index: 122;
  left: 1.25rem;
  top: 1.25rem;  

  @media ${device.tablet} {
    left: 4.25rem;
    top: 2.25rem;  
  }

  @media ${device.laptop} {
    width: 20%;
    justify-content: flex-start;
  }

  @media ${device.laptop} {
    &::before {
      display: block;
      content: "";
      height: 2px;
      width: 50%;
      background-color: ${({theme}) => theme.colors.black};
      position: absolute;
      top: 25px;
      left: -30%;

      @media ${device.laptop} {
        width: 40%;
        left: -35%;
        ${({ path }) => path !== '/' && css`
          background-color: ${({theme}) => theme.colors.white};
        `}
      }
    }
  }

  a {
    width: 100%;
    @media ${device.tablet} {
      width: 70%;
    }
    @media ${device.laptop} {
      width: 100%;
    }
  }

  img {
    width: 90%;
    height: 100%;
    transition: all .3s ease-in-out;
    ${({ path, inShowMenuChangeColor }) => inShowMenuChangeColor && path === '/' && css`
      filter: invert(77%) sepia(10%) saturate(1075%) hue-rotate(79deg) brightness(92%) contrast(85%);
    `}
    
    @media ${device.laptop} {
      width: 40%;
    }
  }
`;

export const MenuHamburguer = styled.button<MenuHamburguerProps>`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  z-index: 102;
  transition: all .3s;
  position: absolute;
  right: 1.25rem;
  top: 1.5rem;
  color: ${({theme}) => theme.colors.black};

  @media ${device.tablet} {
      width: 3rem;
      height: 3rem;
      right: 2.25rem;
      top: 2.5rem;
    }
  
  svg {
    opacity: 0.8;

    ${(props) => props.showMenu && css`
      color: ${({theme}) => theme.colors["green-300-d"]}
    ` };
    ${(props) => props.inShowMenuChangeColor != '/' && css`
      color: ${({theme}) => theme.colors.white}
    ` };

    @media ${device.tablet} {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const NavigationLinks = styled.nav<ShowMenuProps>`
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
    top: 1.5rem;
    left: 25%;
    background-color: transparent;
    padding: 0;  
    width: 70%;
  }

  ul {
    display: flex;
    flex-direction: column;
    //height: auto;
    width: 100%;
    font-size: 0.75rem;
    letter-spacing: 0.35rem;
    text-transform: uppercase;
    line-height: 3rem;
    margin: 0 0 1rem 0;
    border-top: 1px solid ${({theme}) => theme.colors["black-opacity-60%"]};

    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-between;
      border-top: 0;
    }

    li {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid ${({theme}) => theme.colors["white-opacity-005%"]};
      
      @media ${device.tablet} {
        display: flex;
        align-items: center;
        height: 5rem;
      }

      @media ${device.laptop} {
        border-bottom: 0;
      }

      a {
        padding: 1px 0;
        line-height: 16px;
        color: ${({theme}) => theme.colors.white};
        opacity: 0.8;
        transition: all 0.3s ease-in-out;

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

