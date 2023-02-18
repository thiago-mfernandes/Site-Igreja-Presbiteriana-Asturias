import { ReactNode } from "react";
import { StyledText } from "./styles";

interface TextProps {
  children: ReactNode;
  textColor?: 'white' | 'black'
}

export function Text({ children, textColor }: TextProps) {
  return <StyledText textColor={textColor} >{children}</StyledText>
}