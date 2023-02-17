import { StyledAnchor } from "./styles";

//componente de botao generico(muda cor, borda, bg)

interface LinkButtonProps {
  href: string;
  children: string;
  activeBackgroundColor?: string;
  applyBorder?: boolean;
}

export function LinkButton({ href, activeBackgroundColor, applyBorder, children }: LinkButtonProps) {
  return (
    <StyledAnchor 
      href={href}
      applyBorder={applyBorder} 
      bgColor={activeBackgroundColor} 
    >
        {children}
    </StyledAnchor>
  )
}