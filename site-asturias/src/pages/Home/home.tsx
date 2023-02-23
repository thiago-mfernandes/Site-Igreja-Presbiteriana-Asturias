import { About } from "../../components/About";
import { BibleStudy } from "../../components/BibleStudy";
import { Hero } from "../../components/Hero";
import { JoinUs } from "../../components/JoinUs";
import { MapLocation } from "../../components/MapLocation";
import { SocialMedia } from "../../components/SocialMedia";
import { UpComingEvents } from "../../components/UpComingEvents";

export function Home() {
  return(
    <>
      <Hero />        
      <About />
      <JoinUs />
      <UpComingEvents />
      <BibleStudy />
      <MapLocation />
      <SocialMedia />
      {/* <Schedule /> */}
    </>
  );
}