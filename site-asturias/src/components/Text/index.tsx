
import { TextProps } from "./interfaces";
import { StyledText } from "./styles";

export function Text({ children, textColor }: TextProps) {
  return <StyledText textColor={textColor} >{children}</StyledText>
}