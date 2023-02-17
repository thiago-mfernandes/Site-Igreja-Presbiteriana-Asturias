import { useWindowSize } from "@/hooks/useWindowSize";
import { CallToAction, FollowUs, TitleContainer, WelcomeContainer } from "./styles";

export function Welcome(){

  const { width } = useWindowSize();
  
  return(
    <WelcomeContainer>
      <section
        data-parallax="scroll"
        data-image-src="images/hero-bg-3000.jpg"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center" 
      >

        {
          width > 500 &&
          <FollowUs className="aqui tem uma classe com um estilo: hero-left-bar">
            <ul> {/**aqui vai o card lateral com o siga-nos */}
              <li>Siga-nos</li>
              <li>
                <a href="#0" title="">Facebook</a>
              </li>
              <li>
                <a href="#0" title="">YouTube</a>
              </li>
              <li>
                <a href="#0" title="">Instagram</a>
              </li>
            </ul> 
          </FollowUs>
        }

        
        <TitleContainer>
          <h1>
            We Exist To <br />
            Honor God And <br />
            Make Disciples
          </h1>

          <CallToAction>
            <a href="events.html">Upcoming Events</a>
            <a href="about.html">About Us</a>
          </CallToAction>
        </TitleContainer> 
        

        

        <div> {/**aqui vai o scroll for more do desktop */}
          <a href="#about" >
            Scroll For More
          </a>
        </div> 
      </section> 
    </WelcomeContainer> 
  );
}