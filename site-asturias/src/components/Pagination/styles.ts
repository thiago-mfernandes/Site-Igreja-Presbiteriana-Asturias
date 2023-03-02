import styled from "styled-components"
import { device } from "@/styles/default";
import { SectionContainer } from "@/components/Section/styles";


export const SectionContainerPagination = styled(SectionContainer)`

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const ContainerReactPaginate = styled.div`
  width: 100%;
  display: flex;

  
  .paginationsButtons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 1rem;
    padding: 10px;
    width: 100%;
    max-width: 100vw;
    height: 8rem;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.colors["gray-300"]};
      border: 0;
      border-radius: 4px;
      padding: 6px;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
  }
  
  .previousButton, .nextButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors["gray-400"]};
    border: 0;
    border-radius: 4px;
    padding: 6px;
    margin-right: 10px;
    width: 40px;
    height: 40px;

    svg {
      font-size: 1rem;
    }
  }

  .paginationsButtons > .paginationActive {
    
    background-color: ${props => props.theme.colors["green-300-d"]};    
    color: ${props => props.theme.colors.white};
  }

  .paginationDisabled {
    background-color: ${props => props.theme.colors["gray-300"]};
  }

`;
