import { StaticImageData } from "next/image";

export interface DevotionalItemProps {
  img_src: string | StaticImageData;
  title: string;
  date_publication: string;
  citation: string;
  text: string;
}