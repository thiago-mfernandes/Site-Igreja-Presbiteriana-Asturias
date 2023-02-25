import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-top: 8px;
`;

export const TotalContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PaginationButtons = styled.div`
  display: flex;
  flex-direction: row;

  p {
    width: 32px;
    color: gray;
    display: flex;
    text-align: center;
  }
`;