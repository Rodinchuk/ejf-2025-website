"use client"
import React from 'react';
import Header from './Header';
import Footer from '../components/Footer';
// import Conclusion from './Conclusion';
import Schedule from './Schedule';
import '../globals.css';


export default function Home() {
  
  return (
    <>
      <Header />
      <Schedule />
      {/* <Conclusion /> */}
      <Footer />
    </>
  );
}