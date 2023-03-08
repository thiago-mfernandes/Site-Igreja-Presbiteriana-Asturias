import { ReactNode } from "react";

export interface StyledTextProps {
  textColor: 'white' | 'black';
}

export interface TextProps {
  children: ReactNode;
  textColor?: 'white' | 'black';
}