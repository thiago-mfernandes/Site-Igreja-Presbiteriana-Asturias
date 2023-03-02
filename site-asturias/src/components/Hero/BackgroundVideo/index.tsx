import { Container } from "./styles";

export function BackgroundVideo() {
  return ( 
      <Container> 
        <video           
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={"/assets/video/sheep.mp4"} />
        </video>
      </Container>  
  );
}