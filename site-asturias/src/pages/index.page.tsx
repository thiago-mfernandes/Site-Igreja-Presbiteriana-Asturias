import { About } from "../components/About";
import { BibleStudy } from "../components/BibleStudy";
import { Hero } from "../components/Hero";
import { JoinUs } from "../components/JoinUs";
import { MapLocation } from "../components/MapLocation";
import { SocialMedia } from "../components/SocialMedia";
import { UpComingEvents } from "../components/UpComingEvents";
import { motion } from "framer-motion"
import Head from "next/head";

export default function Home() {
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="icon" href="favicon.ico" />
          <meta 
            name="description" 
            content="Igreja Presbiteriana Astúrias. Uma igreja que valoriza os relacionamentos em Cristo Jesus. " 
          />        
          <meta
            name="keywords"
            content="Igreja, Presbiteriana, Piracicaba, Igreja Reformada" 
          />
          <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" />
          <title>Astúrias | Home</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <JoinUs />
        <UpComingEvents />
        <BibleStudy />
        <MapLocation />
        <SocialMedia />
      </motion.div>
    </>
  );
}


