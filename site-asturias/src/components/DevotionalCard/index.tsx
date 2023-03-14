import Link from "next/link";
import Image from "next/image";
import { Subtitle } from "../Subtitle";
import { DevotionalCardContainer } from "./styles";
import { DevotionalCardProps } from "./interfaces";
import devotionalThumbnail from "../../../public/devotional-thumbnail.jpeg";

export default function DevotionalCard({ id, title }: DevotionalCardProps) {

  const imageSizeDefault = Number(`${100}%`);

  return (
    <DevotionalCardContainer>
      <Image 
        alt=""       
        width={imageSizeDefault} 
        height={imageSizeDefault} 
        src={devotionalThumbnail}
      />
      <Subtitle>
        <Link href={`/devotional/${id}`}>
          {title}
        </Link>
      </Subtitle>
    </DevotionalCardContainer>
  )
}