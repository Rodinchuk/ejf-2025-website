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

  // const scrollToPartik = () => {
  //   document.getElementById("bot")?.scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToPartnership = () => {
    document.getElementById("partnership")?.scrollIntoView({ behavior: "smooth" });
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
              <Link href="/" style={{ fontWeight: "900" }}>Про подію</Link>
            </li>
            <li>
              <Link href="/schedule">
                Розклад
              </Link>
            </li>
            {/* <li>
              <Link href="/speakers">Спікери</Link>
            </li> */}
          </ul>
        </nav>
        {/* <button onClick={scrollToPartik} className={`${styles.partnerButton} ${styles.desktopOnly}`}>
          Стати учасником
        </button> */}
        <button onClick={scrollToPartnership} className={`${styles.partnerButton1} ${styles.desktopOnly}`}>
          Стати партнером
        </button>

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
              <Link href="/"  style={{ fontWeight: "900" }} onClick={closeMenu}>
                Про подію
              </Link>
            </li>
            <li>
              <Link href="/schedule"  onClick={closeMenu}>
                Розклад
              </Link>
            </li>
            {/* <li>
              <Link href="/speakers" onClick={closeMenu}>
                Спікери
              </Link>
            </li> */}
            {/* <li> 
              <button className={styles.partnerButton} onClick={closeMenu} >
                <Link style={{ color: '#111a94', fontFamily: 'Nunito'}} href="/#bot">Стати учасником</Link>
              </button>
            </li> */}
            <li>
              <button className={styles.partnerButton1} onClick={closeMenu}>
                <Link style={{ fontFamily: 'Nunito'}} href="/#partnership">Стати партнером </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;