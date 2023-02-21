import styled from "styled-components";

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors["gray-900-opacity-20%"]};
`;