"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Carousel from "./CarouselSlide";
import './AboutSection.css';
import Emoji from "@/app/components/Emoji";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="about-container">
      <h2 id="about" className="about-title">Що таке ІЯК?</h2>
      
      <div className="about-content">
        {/* Десктоп-карусель */}
        <div className="about-carousel desktop-only">
          <Carousel />
        </div>

        <div className="about-text">
          <p>
            Інженерний Ярмарок Кар'єри – це захід, який 17 років об’єднує амбітних студентів та провідні компанії для спільного розвитку, налагодження зв’язків та відкриття кар’єрних можливостей.
          </p>

          <p className="about-chance">Для тебе це шанс:</p>

          <>
      <ul className="custom-list">
        <li>
          <span className="emoji"><Emoji symbol="🔹" /></span> Дізнатися про актуальні вакансії;
        </li>
        <li>
          <span className="emoji"><Emoji symbol="🔹" /></span> Пройти пробну співбесіду;
        </li>
        <li>
          <span className="emoji"><Emoji symbol="🔹" /></span> Встановити корисні контакти;
        </li>
        <li>
          <span className="emoji"><Emoji symbol="🔹" /></span> Здобути цінні знання для майбутньої роботи;
        </li>
        <li>
          <span className="emoji"><Emoji symbol="🔹" /></span> Отримати призи за активність.
        </li>
      </ul>

      <style jsx>{`
        .custom-list {
          list-style: none;
          padding-left: 0;
        }
        .custom-list li {
          display: flex;
          align-items: center;
          margin-bottom: 0.5em;
        }
        .emoji {
          font-size: 20px;
          margin-right: 8px;
        }
      `}</style>
    </>
          <div className="mobile-carousel mobile-only">
            <Carousel />
          </div>

          <p>
            Ми віримо у твій кар’єрний потенціал та допоможемо реалізувати його на повну!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
