import styled from "styled-components"
import { SectionContainer } from "@/components/Section/styles";
import { TextBlock } from "@/components/TextBlock/styles";
import { device } from "@/styles/default";

export const AboutContainer = styled(SectionContainer)`
  
  p {
    color: ${props => props.theme.colors.black};
  }

  @media ${device.laptop} {
    flex-direction: column;

    div img {
      width: 50%;
    }
  }
`;


export const SectionTextBlock = styled(TextBlock)`
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
  
  img {
    align-self: center;
    width: 50%;
    margin-bottom: 2.5rem;
    
    @media ${device.laptop} {
      width: 20% !important;
      margin-bottom: 5rem;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    width: 100%;

    padding: 0 1rem;
    margin: 1rem 0;

    font-family: ${props => props.theme.fonts.montserrat};
    color: ${props => props.theme.colors["gray-900"]};
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: .3rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    text-align: center;
    white-space: wrap;

    border: 0;
    background-color: ${props => props.theme.colors["green-300-d"]};

    transition: all .3s ease-in-out;

    @media ${device.tablet} {
      justify-content: center;
    }

    @media ${device.laptop} {
      width: 40%;
      align-self: center;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      
      @media ${device.tablet} {
        width: 80%;
      }
    }
  }
`;