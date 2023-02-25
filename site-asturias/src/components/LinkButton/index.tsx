import { ReactNode } from "react";
import { StyledAnchor } from "./styles";

interface LinkButtonProps {
  children: ReactNode;
  variantColorLetter?: string;
  variantBackgroundColor?: 'gray' | 'green';
  variantApplyBorder?: boolean;
  isGivingPage?: boolean;
}

export function LinkButton({ isGivingPage, variantBackgroundColor, variantApplyBorder, variantColorLetter, children }: LinkButtonProps) {
  return (
    <StyledAnchor 
      isGivingPage={isGivingPage}
      applyBorder={variantApplyBorder} 
      bgColor={variantBackgroundColor} 
      colorLetter={variantColorLetter}
    >
      {children}
    </StyledAnchor>
  )
}