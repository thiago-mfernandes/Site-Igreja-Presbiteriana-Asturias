import { Container } from "./styles";
import video from "../../../assets/video/sheep.mp4";

export function BackgroundVideo() {
  return ( 
      <Container> 
        <video autoPlay loop muted playsInline>
          <source src={video} />
        </video>
      </Container>  
  );
}