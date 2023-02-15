
import { Container } from "./styles";

export function BackgroundVideo() {
  return ( 
    <Container
      // position="absolute"
      // w="100%"
      // minHeight="100vh"
      // top="0"
      // left="0"
      // backgroundSize="cover"
      // backgroundPosition="center"
      // overflow="hidden"
      // willChange="transform, opacity, filter"
      // backgroundRepeat="no-repeat"
      // zIndex="0"
      // objectFit="cover"
      //boxShadow="inset 100px 100px 100px 10px rgba(0,0,0)"

      //fazer o styled-compontes, global, tipagem, etc
    >        
      <video
        autoPlay 
        loop 
        muted 
        playsInline
        //width="100%"
        //height="100vh"
      >
        <source src={require('../../../assets/video/sheep.mp4')} />
      </video>
    </Container>   
  );
}