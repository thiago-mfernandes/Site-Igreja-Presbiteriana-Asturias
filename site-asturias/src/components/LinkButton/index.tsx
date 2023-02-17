import { StyledAnchor } from "./styles";

//componente de botao generico(muda cor, borda, bg)

interface LinkButtonProps {
  href: string;
  children: string;
  variantColorLetter?: string;
  variantBackgroundColor?: 'transparent' | 'cinza' | 'verde';
  variantApplyBorder?: boolean;
}

export function LinkButton({ href, variantBackgroundColor, variantApplyBorder, variantColorLetter, children }: LinkButtonProps) {
  return (
    <StyledAnchor 
      href={href}
      applyBorder={variantApplyBorder} 
      bgColor={variantBackgroundColor} 
      colorLetter={variantColorLetter}
    >
        {children}
    </StyledAnchor>
  )
}