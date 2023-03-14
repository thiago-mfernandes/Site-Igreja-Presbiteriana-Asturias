import Image from "next/image";
import { Subtitle } from "../Subtitle";
import { Text } from "../Text";
import { DevotionalItemProps } from "./interfaces";
import { DevotionalItemContainer, MessageTitle } from "./styles";

export function DevotionalItem({ 
  citation,
  date_publication, 
  img_src,
  text,
  title
}: DevotionalItemProps) {
  return (
    <DevotionalItemContainer>
      <Image src={img_src} alt={""} /> 

      <MessageTitle>
        <Subtitle>{title}</Subtitle>
        <h4>{date_publication}</h4>
      </MessageTitle>

      <cite>{citation}</cite>
      <blockquote>
        <Text>
          {text} 
        </Text>
      </blockquote>
    </DevotionalItemContainer>
  )
}