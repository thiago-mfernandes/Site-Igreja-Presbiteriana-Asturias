
import { BibleStudy } from "@/components/BibleStudy";
import { Hero } from "@/components/Hero";
import { JoinUs } from "@/components/JoinUs";
import { MapLocation } from "@/components/MapLocation";
import { SocialMedia } from "@/components/SocialMedia";
import { UpComingEvents } from "@/components/UpComingEvents";
import { motion } from "framer-motion"
import Head from "next/head";
import About from "../styles/about/about.page";

export default function Home() {
  return(
    <>
      <Head>
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