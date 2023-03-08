import Link from "next/link";
import { ContainerNavigationLinks } from "./styles";
import { NavigationLinksProps } from "./interface";
import data from "@/data/navlinks.json";

export function NavigationLinks({ isHomePage, handleOnClick, showMenu}: NavigationLinksProps) {
  return (
    <ContainerNavigationLinks showMenu={showMenu} isHomePage={isHomePage}>
      <ul>
        {
          data.map((link) => (
            <li key={link.id}>
              <Link 
                href={link.href} 
                onClick={() => handleOnClick(false)}
              >
                {link.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </ContainerNavigationLinks>
  )
}

