import { useRouter } from "next/router";

export function usePageHeaderTitle() {

  let { pathname } = useRouter(); 
  
  function changeTitle(pathname: string): String {
    switch(pathname) {
      case '/about':
        return 'Somos a Igreja Presbiteriana Astúrias';
      case '/ministries':
        return 'Junte-se a nós';
      case '/schedule':
        return 'Nossa Agenda';
      case '/giving':
        return 'Oferte a casa do Senhor';
      case '/faq':
        return 'Perguntas Frequentes';
      case '/contact':
        return 'Fale Conosco';
      case '/login':
        return 'Em breve';
      case '/devotional':
        return 'Devocionais';
      default:
        return 'Página não encontrada!';
    }
  }
  
  let pageTitle = changeTitle(pathname);

  return pageTitle;
}