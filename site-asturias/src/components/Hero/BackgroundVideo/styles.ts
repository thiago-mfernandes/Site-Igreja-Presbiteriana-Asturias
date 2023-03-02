import styled from "styled-components"
import { device } from "@/styles/default";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  will-change: transform, opacity, filter;
  background-repeat: no-repeat;
  z-index: 0; 
  
  @media ${device.laptop} {
    width: 100%;
  }
  
  video {
    background-attachment: fixed;
    position: absolute; 
    display: block; 
    z-index: -1;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
    min-width: 100%;
    overflow: hidden;
  }
`;

