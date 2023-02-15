
import Head from 'next/head'
import Image from 'next/image'
import logo from "../../assets/logo/logo-black.png"
import { Sidebar } from '../Sidebar';
import { BackgroundVideo } from './BackgroundVideo'

export function Hero() {
  return (
    <>
      <div
        display="block"
        position="relative"
        width="100%"
        //height="100vh"
        //overflowX="hidden"
      >
        <BackgroundVideo />
        
        <div
          position="absolute"
          p="6"
          width="100%"
        >
          <div height={40}> 
            <a
              href="#"
              width="100%"
              height={40}
            >
              <Image 
                src={logo} 
                alt="Logotipo da Igreja Presbiteriana Astúrias" 
                width={90}
              />
            </a>
          </div>

          <nav>
            <ul>
              <li><a href="index.html" title="Home">Home</a></li>
              <li><a href="about.html" title="About">About</a></li>
              <li><a href="events.html" title="Services">Events</a></li>
              <li><a href="contact.html" title="Contact us">Contact</a></li>	
            </ul>
          </nav>

          <a href="#0"><span>Menu</span></a>

        </div>
      </div>
      <div>
        <section
          data-parallax="scroll"
          data-image-src="images/hero-bg-3000.jpg"
          data-natural-width={3000}
          data-natural-height={2000}
          data-position-y="center" 
        >

          <div className="aqui tem uma classe com um estilo: hero-left-bar" ></div>

          <div>
            <div>
              <h1>
                  We Exist To <br />
                  Honor God And <br />
                  Make Disciples
              </h1>

              <div>
                  <a href="events.html">Upcoming Events</a>
                  <a href="about.html">About Us</a>
              </div>
            </div> 
          </div> 

          <ul >
              <li >Follow Us</li>
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

          <div>
              <a href="#about" >
                  Scroll For More
              </a>
          </div> 
        </section> 
      </div>    
    </>
  );
}