"use client";
import React, { useState } from 'react';
import styles from '@/app/components/Header.module.css';
import Image from 'next/image'; 
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
//#257BFC
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToPartnership = () => {
    document.getElementById("partnership")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };
  const router = useRouter();

 

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}><a href='#' className={styles.logoContainer}>
        <Image
          onClick={scrollToHome}
          src="/images/logoWhite.png" 
          alt="Logo"
          width={50}
          height={50} 
          className={styles.logo}
          onMouseEnter={(e) => e.currentTarget.classList.add(styles.spin)}
          onMouseLeave={(e) => e.currentTarget.classList.remove(styles.spin)}
        />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li><a href="#about" style={{ fontWeight: '900' }}>Про подію</a></li>

          <li><a href="#stats">Розклад</a></li>
          <li><a href="#contacts">Спікери</a></li>
        </ul>
      </nav>
      <a onClick={scrollToPartnership} className={`${styles.partnerButton} ${styles.desktopOnly}`}>Стати учасником</a>
      <a onClick={scrollToPartnership} className={`${styles.partnerButton} ${styles.desktopOnly}`}>Співпрацювати</a>


      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={closeMenu}>×</button>
        <ul>
          <li><a style={{ fontWeight: '900' }} onClick={closeMenu}>Про подію</a></li>
          <li><a href="#stats" onClick={closeMenu}>Статистика</a></li>
          <li><a href="#contacts" onClick={closeMenu}>Контакти</a></li>
          <li><a href="#partik"><button className={styles.partnerButton} onClick={closeMenu}>Стати учасником</button></a></li>
          <li><a href="#partnership"><button className={styles.partnerButton} onClick={closeMenu}>Співпрацювати</button></a></li>
        </ul>
      </div></div>
    </header>
  );
};

export default Header;
