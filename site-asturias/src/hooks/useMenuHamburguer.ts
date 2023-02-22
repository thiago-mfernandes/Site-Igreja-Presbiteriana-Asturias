import { useState } from "react";

interface useMenuHamburguerProps {
  showMenu: boolean;
  setShowMenu?: (isOpen?: boolean) => void;
  handleNavigationMenu: () => void;
}

export function useMenuHamburguer(): useMenuHamburguerProps {
  const [showMenu, setShowMenu] = useState(false);

  function handleNavigationMenu() {
    setShowMenu(!showMenu);
  }

  return { showMenu, handleNavigationMenu }
}