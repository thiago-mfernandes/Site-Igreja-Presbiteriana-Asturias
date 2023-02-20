import styled from "styled-components";

export const GenericContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const ContainerFooter = styled.footer`
  padding: 8rem 1.25rem 3rem;
  background-color: ${props => props.theme.colors["green-300-d"]};
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
`;

export const ContainerLogo = styled.div`
  margin-bottom: 3rem;

  a {
    display: flex;
    width: 50%;
    height: auto;
  }

  img {
    width: 100%;
  }
`;

export const TheChurchContainer = styled(GenericContainer)`

`;

export const AddressContainer = styled(GenericContainer)`

`;

export const ContactContainer = styled(GenericContainer)`

  div {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: ${props => props.theme.colors["white-opacity-80%"]};

    a {
      opacity: 0.8;
      line-height: 1.6;
      text-align: justify;
      display: flex;

      svg {
        color: ${props => props.theme.colors["green-700"]};
        margin-right: 16px;
      }
    }
  }
`;

export const PreacherContainer = styled(GenericContainer)`
  width: 100%;

  div {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ReservedRights = styled(GenericContainer)`
  align-items: center;
  margin-bottom: 0;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors["white-opacity-40%"]};
  
  p {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;

    &:last-child {
      display: flex;
      align-items: center;
    }

    svg {
      margin: 0 5px;
      color: ${props => props.theme.colors["red-500"]};
    }

    a {
      color: ${props => props.theme.colors["red-700"]};
    }
  }
`;