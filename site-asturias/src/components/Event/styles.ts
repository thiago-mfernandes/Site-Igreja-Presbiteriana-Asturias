import { device } from "@/styles/default";
import styled from "styled-components"

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  
  @media ${device.laptop} {
    width: 47.5%;
  }

  ul {
    font-family: ${({theme}) => theme.fonts.montserrat};
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    color: ${({theme}) => theme.colors.black};
    border-top: 1px solid ${({theme}) => theme.colors["gray-900-opacity-20%"]};
  }

  li {
    display: flex;
    align-items: center;
    padding: 1.25rem 0.5rem;
    border-bottom: 1px solid ${({theme}) => theme.colors["gray-900-opacity-20%"]};

    svg {
      margin-right: 10px;
    }
  }

  span {
    font-family: ${({theme}) => theme.fonts.montserrat};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: .20rem;
    color: ${({theme}) => theme.colors.black};
    padding-left: 12px;
  }
`;