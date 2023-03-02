import { ReactNode } from "react";

export interface StyledAnchorProps {
  bgColor?: 'gray' | 'green';
  applyBorder?: boolean;
  colorLetter?: string;
  isGivingPage?: boolean;
}

export interface LinkButtonProps {
  children: ReactNode;
  variantColorLetter?: string;
  variantBackgroundColor?: 'gray' | 'green';
  variantApplyBorder?: boolean;
  isGivingPage?: boolean;
}