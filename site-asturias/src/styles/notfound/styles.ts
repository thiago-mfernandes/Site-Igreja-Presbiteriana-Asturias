import styled from "styled-components";
import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";

export const NotFoundContainer = styled(SectionContainer)`
  @media ${device.laptop} {
    flex-direction: column;
  }

  button {
    @media ${device.laptop} {
      width: 50%;
    }
  }
`;