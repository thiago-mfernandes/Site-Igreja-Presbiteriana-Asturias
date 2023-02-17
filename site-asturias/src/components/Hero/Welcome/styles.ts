import styled from "styled-components";

export const WelcomeContainer = styled.div`
  width: 80%;
  height: auto;
  overflow: hidden;
  background-color: transparent;
  position: absolute;
  top: 8rem;
`;

export const FollowUs = styled.div`
  
`;

export const TitleContainer = styled.div`
  width: 100%;

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors.white};

    &::before {
      display: block;
      content: "";
      height: 2px;
      width: 10rem;
      background-color: ${props => props.theme.colors.greenDefault};
      position: absolute;
      top: 0;
      left: 0.8rem;
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
`;