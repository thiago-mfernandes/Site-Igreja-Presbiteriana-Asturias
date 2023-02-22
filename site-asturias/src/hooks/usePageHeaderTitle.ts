import { useLocation } from "react-router-dom";

export function usePageHeaderTitle() {

  let { pathname } = useLocation(); 
  
  function changeTitle(pathname: string): String {
    switch(pathname) {
      case '/about':
        return 'Somos a Igreja Presbiteriana Astúrias';
      case '/ministries':
        return 'Conheça nossos Ministérios';
  
    }
  }
  
  let pageTitle = changeTitle(pathname);

  return pageTitle;
}