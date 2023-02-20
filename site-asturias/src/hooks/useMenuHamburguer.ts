import { useState } from "react";

interface useMenuHamburguerProps {
  showMenu: boolean;
  setShowMenu?: () => void;
  handleNavigationMenu: () => void;
}

export function useMenuHamburguer(): useMenuHamburguerProps {
  const [showMenu, setShowMenu] = useState(false);

  function handleNavigationMenu() {
    setShowMenu(!showMenu);
  }

  return { showMenu, handleNavigationMenu }
}