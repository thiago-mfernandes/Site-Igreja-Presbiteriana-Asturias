import styled from "styled-components";

export const ContainerSection = styled.section`
  padding: 20rem;
  background-color: ${props => props.theme.colors.greenDefault};
  color: ${props => props.theme.colors["white-opacity-80%"]}
`;