'use client';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import { useRef } from 'react';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sectionRef = useRef(null);
  const handleScroll = () => {
  sectionRef.current.scrollIntoView({ behavior: 'smooth' });
}
  return (
    <>
      <Hero handleScroll={handleScroll}/>
      <Features />
      <Video sectionRef={sectionRef} />
      <Brands />
      <AboutSectionOne sectionRef={sectionRef} />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
