import { ReactNode } from "react";

export interface SubtitleProps {
  children: ReactNode;
  textColor?: 'white' | 'black' | 'green'
}

export interface StyledTextProps {
  textColor: 'white' | 'black' | 'green';
}