import { SectionContainer } from "@/components/Section/styles";
import styled from "styled-components";
import { device } from "../default";

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