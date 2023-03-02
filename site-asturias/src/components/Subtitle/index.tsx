import { SubtitleProps } from "./interfaces";
import { StyledSubtitle } from "./styles";

export function Subtitle({ children, textColor }: SubtitleProps) {
  return <StyledSubtitle textColor={textColor} >{children}</StyledSubtitle>
}