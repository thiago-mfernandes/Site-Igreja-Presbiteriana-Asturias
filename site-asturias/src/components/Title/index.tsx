import { ReactNode } from "react";
import { StyledTitle } from "./styles";


interface TitleProps {
  children: ReactNode;
  textColor?: 'white' | 'green';
}

export function Title({ children, textColor }: TitleProps) {
  return <StyledTitle textColor={textColor}>{children}</StyledTitle>
}