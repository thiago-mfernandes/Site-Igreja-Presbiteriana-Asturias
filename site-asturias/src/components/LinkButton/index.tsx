import { ReactNode } from "react";
import { StyledAnchor } from "./styles";

interface LinkButtonProps {
  children: ReactNode;
  variantColorLetter?: string;
  variantBackgroundColor?: 'gray' | 'green';
  variantApplyBorder?: boolean;
}

export function LinkButton({ variantBackgroundColor, variantApplyBorder, variantColorLetter, children }: LinkButtonProps) {
  return (
    <StyledAnchor 
      applyBorder={variantApplyBorder} 
      bgColor={variantBackgroundColor} 
      colorLetter={variantColorLetter}
    >
        {children}
    </StyledAnchor>
  )
}