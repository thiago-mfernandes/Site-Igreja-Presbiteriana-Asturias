import { LinkButtonProps } from "./interfaces";
import { StyledAnchor } from "./styles";

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