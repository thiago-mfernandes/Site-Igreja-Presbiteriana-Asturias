import styled from "styled-components"

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  ul {
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    color: ${props => props.theme.colors["gray-900"]};
    border-top: 1px solid ${props => props.theme.colors["gray-900-opacity-20%"]};
  }

  li {
    display: flex;
    align-items: center;
    padding: 1.25rem 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors["gray-900-opacity-20%"]};

    svg {
      margin-right: 10px;
    }
  }

  span {
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: .20rem;
    color: ${props => props.theme.colors["gray-900"]};
    padding-left: 12px;
  }
`;