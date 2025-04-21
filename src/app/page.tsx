import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import React from 'react';
import TgBot from './components/TgBot';
import Activities from "./components/Activities";
import PartnersPrev from "./components/PartnersPrev";
import AboutBEST from './components/AboutBEST';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ІЯК 2025",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TgBot/>
      <Activities />
      <PartnersPrev />
      <AboutBEST />
      <Contacts />
      <Footer />
    </>
  );
}
