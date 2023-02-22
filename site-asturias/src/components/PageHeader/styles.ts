import styled, { css } from "styled-components";

import imgBible from '../../assets/bible.jpg'
import ministries from '../../assets/ministries-bg.jpg'
import calendar from '../../assets/calendar.jpg'
import offering from '../../assets/offering.jpg'

interface PageHeaderContainerProps {
  path?: string;
}

export const PageHeaderContainer = styled.header<PageHeaderContainerProps>`
  padding: 10rem 1.25rem 20rem;
  min-height: 25rem;
  text-align: center;
  background-color: ${props => props.theme.colors["gray-900"]};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${props => props.theme.colors.white};

  ${({ path }) => path === '/about' && css`
    background-image: url(${imgBible});
  `}

  ${({ path }) => path === '/schedule' && css`
    background-image: url(${calendar});
  `}

  ${({ path }) => path === '/giving' && css`
    background-image: url(${offering});
  `}
  
  ${({ path }) => path === '/ministries' && css`
    background-image: url(${ministries});
  `}


  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    opacity: .7;
  }
`;