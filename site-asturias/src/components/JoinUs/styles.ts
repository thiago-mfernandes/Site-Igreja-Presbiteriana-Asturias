import styled from "styled-components"

export const ScheduleSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10rem 1.25rem;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors["gray-900-opacity-20%"]};
`;

export const ContainerContent = styled.div`
  padding-bottom: 1rem;
`;