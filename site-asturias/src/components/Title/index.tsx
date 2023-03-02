import { TitleProps } from "./interfaces";
import { StyledTitle } from "./styles";


export function Title({ children, textColor }: TitleProps) {
  return <StyledTitle textColor={textColor}>{children}</StyledTitle>
}