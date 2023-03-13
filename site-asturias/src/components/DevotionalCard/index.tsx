import Link from "next/link";
import Image from "next/image";
import { Subtitle } from "../Subtitle";
import teste from "public/assets/background/bible.jpg";
import { DevotionalCardContainer } from "./styles";
import { DevotionalCardProps } from "./interfaces";

export default function DevotionalCard({ id, title }: DevotionalCardProps) {

  const imageSizeDefault = Number(`${100}%`);

  return (
    <DevotionalCardContainer>
      <Image 
        alt=""       
        width={imageSizeDefault} 
        height={imageSizeDefault} 
        src={teste}
      />
      <Subtitle>
        <Link href={`/devotional/${id}`}>
          {title}
        </Link>
      </Subtitle>
    </DevotionalCardContainer>
  )
}