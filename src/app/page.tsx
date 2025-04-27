"use client"
import React from 'react';
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