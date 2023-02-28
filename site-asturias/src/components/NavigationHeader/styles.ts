import styled, { css } from "styled-components";
import { device } from "../../styles/default";

interface LogoContainerProps {
  inShowMenuChangeColor: boolean;
  path?: string
}

interface MenuHamburguerProps {
  showMenu: boolean;
  inShowMenuChangeColor?: string;
}

interface ShowMenuProps {
  showMenu: boolean;
}

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

  a {
    width: 100%;
    @media ${device.tablet} {
      width: 70%;
    }
  }

  img {
    width: 80%;
    transition: all .3s ease-in-out;
    ${({ path, inShowMenuChangeColor }) => inShowMenuChangeColor && path === '/' && css`
      filter: invert(77%) sepia(10%) saturate(1075%) hue-rotate(79deg) brightness(92%) contrast(85%)
    `}
    
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
  color: ${props => props.theme.colors.black};

  @media ${device.tablet} {
      width: 3rem;
      height: 3rem;
      right: 2.25rem;
      top: 2.5rem;
    }
  
  svg {
    opacity: 0.8;

    ${(props) => props.showMenu && css`
      color: ${props => props.theme.colors["green-300-d"]}
    ` };
    ${(props) => props.inShowMenuChangeColor != '/' && css`
      color: ${props => props.theme.colors.white}
    ` };

    @media ${device.tablet} {
      width: 4rem;
      height: 4rem;
    }
  }
`;



export const NavigationLinks = styled.nav<ShowMenuProps>`
  font-family: ${props => props.theme.fonts.montserrat};
  display: ${({showMenu}) => showMenu ? 'block' : 'none'};
  background-color: ${props => props.theme.colors["gray-900-opacity-90%"]};
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

  ul {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    font-size: 0.75rem;
    letter-spacing: 0.35rem;
    text-transform: uppercase;
    line-height: 3rem;
    margin: 0 0 1rem 0;
    border-top: 1px solid ${props => props.theme.colors["black-opacity-60%"]};

    li {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid ${props => props.theme.colors["white-opacity-005%"]};
      
      @media ${device.tablet} {
        display: flex;
        align-items: center;
        height: 5rem;
      }

      a {
        padding: 1px 0;
        line-height: 16px;
        color: ${props => props.theme.colors.white};
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${props => props.theme.colors["gray-300-d"]};
          opacity: 1;
        }
      }
    } 
  }
`;

