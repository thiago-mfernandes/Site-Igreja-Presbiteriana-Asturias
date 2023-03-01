import styled from "styled-components";
import { device } from "../../styles/default";

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

  @media ${device.tablet} {
    padding: 8rem 4rem 3rem;
  }

  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ContainerLogo = styled.div`
  margin-bottom: 3rem;

  a {
    display: flex;
    width: 50%;
    height: auto;

    @media ${device.tablet} {
      width: 25%;
    }
    @media ${device.laptop} {
      width: 10%;
    }
  }

  img {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const TheChurchContainer = styled(GenericContainer)`

  @media ${device.laptop} {
    width: 47.5%;
  }
`;

export const AddressContainer = styled(GenericContainer)`

  a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 100%;
  margin: 1rem 0;

  font-family: ${props => props.theme.fonts.montserrat};
  color: ${props => props.theme.colors["gray-900"]};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: .3rem;
  line-height: 3.5rem;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;

  border: 0;
  background-color: ${props => props.theme.colors["gray-900-opacity-20%"]};

  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors["green-600"]};
    color: ${props => props.theme.colors.white}
  }

    svg {
      margin-left: 10px;
    }
  }

  @media ${device.laptop} {
    width: 47.5%;
  }
`;

export const ContactContainer = styled(GenericContainer)`

  div {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: ${props => props.theme.colors["white-opacity-80%"]};
    @media ${device.tablet} {
      margin-bottom: 2rem;
    }

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

  @media ${device.tablet} {
    width: 47.5%;
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

  @media ${device.tablet} {
    width: 100%;
  }
`;