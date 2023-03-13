import { device } from "@/styles/default";
import styled from "styled-components";

export const DevotionalCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["black-opacity-10%"]};

  @media ${device.tablet} {
    width: 47.5%;
  }

  @media ${device.laptop} {
    width: 22.5%;
    margin-right: 2.5%;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

`;