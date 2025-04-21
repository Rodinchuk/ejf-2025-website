import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Carousel from "./CarouselSlide";
import './AboutSection.css';

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

          <ul>
            <li>Дізнатися про актуальні вакансії;</li>
            <li>Пройти пробну співбесіду;</li>
            <li>Встановити корисні контакти;</li>
            <li>Здобути цінні знання для майбутньої роботи;</li>
            <li>Отримати призи за активність.</li>
          </ul>

          {/* Мобільна карусель всередині тексту */}
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
