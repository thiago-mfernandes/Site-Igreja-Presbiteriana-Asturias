import styled from "styled-components";
import { SectionContainer } from "@/components/Section/styles";
import { device } from "@/styles/default";

const LoginContainer = styled(SectionContainer)`
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export default LoginContainer