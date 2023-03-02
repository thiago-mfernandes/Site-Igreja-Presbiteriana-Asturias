import { Envelope, FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from "phosphor-react";
import Link from "next/link";
import { ContainerSocialMedia } from "./styles";

export function SocialMedia() {
  return (
    <ContainerSocialMedia>
      <ul>
        <Link href="https://wa.me/5519981074353" target="_blank">
          <WhatsappLogo size={24} />
        </Link>
        <Link href="https://www.facebook.com/ipbasturias/" target="_blank">
          <FacebookLogo size={24} />
        </Link>
        <Link href="https://www.instagram.com/ipbasturias/" target="_blank">
          <InstagramLogo size={24} />
        </Link>
        <Link href="https://www.youtube.com/@igrejapresbiterianaasturia6315" target="_blank">
          <YoutubeLogo size={24} />
        </Link>
        <Link href="/contact">
          <Envelope size={24} />
        </Link>
      </ul>
    </ContainerSocialMedia>
  );
}