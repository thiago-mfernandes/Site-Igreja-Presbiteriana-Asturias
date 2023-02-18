import { ReactNode } from "react";
import { StyledSubtitle } from "./styles";

interface SubtitleProps {
  children: ReactNode;
  textColor?: 'white' | 'black' | 'green'
}

export function Subtitle({ children, textColor }: SubtitleProps) {
  return <StyledSubtitle textColor={textColor} >{children}</StyledSubtitle>
}