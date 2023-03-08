import styled from "styled-components";
import { device } from "@/styles/default";

export const ContainerMap = styled.div`
  iframe {
    width: 100%;
    height: 60vh;
    border: 0;

    @media ${device.tablet} {
      height: 40vh;
    }
  }
`;