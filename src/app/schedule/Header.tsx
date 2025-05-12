"use client";
import React, { useState } from "react";
import styles from "@/app/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToPartik = () => {
    document.getElementById("bot")?.scrollIntoView({ behavior: "smooth" });
  };
 
  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
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
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" >Про подію</Link>
            </li>
            <li>
              <Link href="/schedule" style={{ fontWeight: "900" }}>
                Розклад
              </Link>
            </li>
            <li>
              <Link href="/speakers">Спікери</Link>
            </li>
          </ul>
        </nav>
        <Link className={`${styles.partnerButton} ${styles.desktopOnly}`} style={{ fontFamily: 'Nunito', textDecoration: 'none'}} href="/#bot">
            Стати учасником
          </Link>
         <Link className={`${styles.partnerButton1} ${styles.desktopOnly}`} style={{ fontFamily: 'Nunito', textDecoration: 'none'}} href="/#partnership">
            Стати партнером
          </Link>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <button className={styles.closeButton} onClick={closeMenu}>
            ✕
          </button>
          <ul>
            <li>
              <Link href="/"   onClick={closeMenu}>
                Про подію
              </Link>
            </li>
            <li>
              <Link href="/schedule"  style={{ fontWeight: "900" }} onClick={closeMenu}>
                Розклад
              </Link>
            </li>
            <li>
              <Link href="/speakers" onClick={closeMenu}>
                Спікери
              </Link>
            </li>
            <li>
            <button className={styles.partnerButton} onClick={closeMenu}>
                <Link href="/#bot" style={{ fontFamily: 'Nunito', color: '#111a94', textDecoration: 'none'}}>Стати учасником
                </Link>
              </button>
            </li>
            <li>
              <button className={styles.partnerButton1} onClick={closeMenu}>
                <Link href="/#partnership">Стати партнером
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;