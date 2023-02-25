import { css } from "styled-components"

import imgBible from '../assets/bible.jpg'
import ministries from '../assets/ministries.jpg'
import calendar from '../assets/calendar.jpg'
import offering from '../assets/offering.jpg'
import faq from '../assets/faq.jpg'
import contact from '../assets/contact.jpg'
import login from '../assets/login.jpg'
import lost from '../assets/lost.jpg'

export function handleBackroundImage(pathname: string) {
  switch(pathname){
    case '/about':
      return css`background-image: url(${imgBible});`
    case '/schedule':
      return css`background-image: url(${calendar});`
    case '/giving':
      return css`background-image: url(${offering});`
    case '/ministries':
      return css`background-image: url(${ministries});`
    case '/faq':
      return css`background-image: url(${faq});`
    case '/contact':
      return css`background-image: url(${contact});`
    case '/login':
      return css`background-image: url(${login});`
    default:
      return css`background-image: url(${lost});`
  }
}
