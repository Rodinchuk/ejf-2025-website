"use client"
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TgBot from './components/TgBot';
import Activities from "./components/Activities";
import PartnersPrev from "./components/PartnersPrev";
import AboutBEST from './components/AboutBEST';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import TeamSwiper from './components/TeamSwiper';
import GallerySwiper from './components/Gallery';
import Conclusion from './components/Conclusion';

import './globals.css';

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2.5,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  //     touchMultiplier: 2 
  //   }); 
  //   lenis.on('scroll', (e: any) => {
  //     console.log(e) 
  //   });
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy(); // знищуємо при демонтажі
  //   };
  // }, []);
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 3.5,  
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     touchMultiplier: 2, 
  //   });
  
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  
  //   requestAnimationFrame(raf);
  
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TgBot />
      <Activities />
      <TeamSwiper />
      <AboutBEST />
      <PartnersPrev />
      <Contacts />
      <GallerySwiper />
      <Conclusion />
      <Footer />
    </>
  );
}