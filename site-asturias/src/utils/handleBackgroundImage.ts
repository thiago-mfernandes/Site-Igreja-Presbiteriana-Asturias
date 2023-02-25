import { css } from "styled-components"

import imgBible from '../assets/background/bible.jpg'
import ministries from '../assets/background/ministries.jpg'
import calendar from '../assets/background/calendar.jpg'
import offering from '../assets/background/offering.jpg'
import faq from '../assets/background/faq.jpg'
import contact from '../assets/background/contact.jpg'
import login from '../assets/background/login.jpg'
import lost from '../assets/background/lost.jpg'

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
