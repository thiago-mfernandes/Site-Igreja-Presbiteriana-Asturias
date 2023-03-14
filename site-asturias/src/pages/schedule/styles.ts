import { SectionContainer } from "@/components/Section/styles"
import { device } from "@/styles/default";
import styled from "styled-components"

const SingleEventContainer = styled(SectionContainer)`

  @media ${device.laptop} {
    flex-direction: column;
  }
  
  button {
    width: 100%;
    background-color: ${({ theme}) => theme.colors["green-300-d"]};
    margin-bottom: 2.5rem;

    @media ${device.laptop} {
      width: 500px;
    }
  }
`;

export default SingleEventContainer;