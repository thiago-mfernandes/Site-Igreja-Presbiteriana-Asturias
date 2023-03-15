import { device } from "@/styles/default";
import styled from "styled-components";

const CardTransferInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["black-opacity-10%"]};

  @media ${device.laptop} {
    width: 47.5%;
  }


`;

export default CardTransferInfo;