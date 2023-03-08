import styled from "styled-components";
import { device } from "@/styles/default";

export const ContainerSocialMedia = styled.section`
  padding: 10rem 1.25rem;
  background-color: ${({theme}) => theme.colors.black};

  @media ${device.tablet} {
    padding: 8rem 8rem;
  }

  @media ${device.laptopL} {
    padding: 8rem 20rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.white};
    height: 50px;
    width: 50px;
    transition: all .3s ease-out;
    &:hover {
      border: 1px solid ${({theme}) => theme.colors["green-300-d"]};
    }
    &:hover svg {
      cursor: pointer;
      color: ${({theme}) => theme.colors["green-300-d"]};
    }
  }

  svg {
    transition: all .3s ease-out;
    color: ${({theme}) => theme.colors.white};
  }
`;