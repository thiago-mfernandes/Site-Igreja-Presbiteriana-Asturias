import styled from "styled-components";
import { device } from "@/styles/default";

export const DevotionalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 2.5rem;

    @media ${device.laptop} {
      width: 30%;
    }
  }  

  cite {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    padding-bottom: 0.85rem;
    width: 100%;
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.colors["black-opacity-10%"]};
  }
`;

export const MessageTitle = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 2.5rem;

  @media ${device.laptop} {
    flex-direction: row;
  }

  h3, h4 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    margin-bottom: 1rem;
    padding-right: 1rem;
    font-family: ${({ theme }) => theme.fonts.gloock};
  }

  h4::before {
    content: "- "
  }
`;