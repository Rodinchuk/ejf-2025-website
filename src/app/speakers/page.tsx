"use client"
import React from 'react';
import Header from './Header';
import Footer from '../components/Footer';
import TeamSwiper from './TeamSwiper';
import '../globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <TeamSwiper />
      <Footer />
    </>
  );
}