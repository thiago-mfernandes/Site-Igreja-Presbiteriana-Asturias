import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
  textColor?: 'white' | 'green';
}

export interface StyledTitleProps {
  textColor: 'white' | 'green';
}