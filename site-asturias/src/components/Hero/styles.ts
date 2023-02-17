import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  padding: 1.25rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  object-fit: cover; 
  //overflow: hidden;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  position: absolute;
  z-index: 122;
  left: 1.25rem;
  top: 1.25rem;

  a {
    height: 36px
  }

  img {
    height: auto;
  }
`

interface ShowMenuProps {
  showMenu: boolean;
}

const slideIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
  `;


export const NavigationLinks = styled.nav<ShowMenuProps>`
  font-family: ${props => props.theme.fonts.montserrat};
  display: ${({showMenu}) => showMenu ? 'block' : 'none'};
  background-color: ${props => props.theme.colors["gray-900"]};
  height: auto;
  width: 100%;
  padding: 10rem 2.5rem 2.5rem;
  position: absolute;
  top: -5rem;
  left: 0;
  overflow: hidden;
  animation: ${slideIn} .6s ease-in-out;
  z-index: 100;

  //animation: ${({showMenu}) => showMenu ? slideIn : slideOut };

  ul {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    font-size: 0.75rem;
    letter-spacing: 0.35rem;
    text-transform: uppercase;
    line-height: 3.8rem;
    margin: 0 0 4rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    li {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);

      a {
        padding: 18px 0;
        line-height: 20px;
        color: ${props => props.theme.colors.white};
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${props => props.theme.colors.greenDefault};
          opacity: 1;
        }
      }
    } 
  }
`;

export const MenuHamburguer = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  z-index: 102;
  font-family: ${props => props.theme.fonts.lora};
  transition: all .3s;
  position: absolute;
  right: 1.25rem;
  top: 1.5rem;
  
  svg {
    opacity: 0.8;
    color: ${(props) => props.theme.colors.white};
  }
`;