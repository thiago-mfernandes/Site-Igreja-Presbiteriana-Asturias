import styled, { css } from "styled-components";

import imgBible from '../../assets/bible.jpg'


interface PageHeaderContainerProps {
  path?: string;
}

// case '/schedule':
// case '/giving':
// case '/ministries':
// case '/faq':
// case '/contact':
   


export const PageHeaderContainer = styled.header<PageHeaderContainerProps>`
  padding: 24rem 1.25rem 8rem;
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