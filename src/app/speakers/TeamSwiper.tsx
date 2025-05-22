import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useIsMobile } from "../use-mobile";
import styles from "./TeamSwiper.module.css";
import Image from "next/image";

interface ProfileData {
  name: string;
  role: string;
  description: string;
  image: string;
}

const profiles: ProfileData[] = [
  {
    name: "Денис Бігус",
    role: "Журналіст-розслідувач, засновник Bihus",
    description: "Сольний виступ «Як викривати корупцію та залишатись в живих»",
    image: "/images/bihus.png",
  },
  {
    name: "Валентин Краснопльоров",
    role: "Засновник найвідомішого економічного YouTube каналу «Останній капіталіст»",
    description: "Сольний виступ «Фінансова грамотність для студентів: як не жити від стипендії до стипендії»",
    image: "/images/kapitalist.png",
  },
  {
    name: "Назар Тимошик",
    role: "Засновник компанії UnderDefence",
    description: "Панельна дискусія «Що потрібно знати перед тим, як створювати власний продукт/компанію»",
    image: "/images/tymoshyk.png",
  },
  {
    name: "Володимир Назаркевич",
    role: "Засновник і генеральний директор у Kevych Solutions",
    description: "Панельна дискусія «Що потрібно знати перед тим, як створювати власний продукт/компанію»",
    image: "/images/kevych.png",
  },
  {
    name: "Віталій Якушев",
    role: "Генеральний директор 10GUards",
    description: "Панельна дискусія «Що потрібно знати перед тим, як створювати власний продукт/компанію»",
    image: "/images/yakushev.png",
  },
  {
    name: "Наталія Шаховська",
    role: "Ректор Національного університету «Львівська політехніка»",
    description: "Панельна дискусія «Робота після університету: чого не вистачає випускникам?»",
    image: "/images/shakhovska.png",
  },
  {
    name: "Інна Шульгіна",
    role: "Lead Recruirer в Sombra",
    description: "Панельна дискусія «Робота після університету: чого не вистачає випускникам?»",
    image: "/images/shulhina.png",
  },
  {
    name: "Андрій Бойчук",
    role: "Head of AI, викладач кафедри СШІ",
    description: "Панельна дискусія «Робота після університету: чого не вистачає випускникам?»",
    image: "/images/boichuk.jpg",
  },
  {
    name: "Анна Сергійчук",
    role: "Talent Acquisition Partner з більш як 7-річним досвідом у рекрутингу (в тому числі продуктових компаніях Ajax Systems, SKELAR)",
    description: "Панельна дискусія «Робота після університету: чого не вистачає випускникам?»",
    image: "/images/serhiichuk.jpg",
  },
  {
    name: "Андрій Сергійчук",
    role: "HR Generalist у Kevych Solutions",
    description: "Панельна дискусія «Робота після університету: чого не вистачає випускникам?» | Модератор",
    image: "/images/andrewkha.png",
  },
];


const Profile = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [desktopIndex, setDesktopIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleDesktopPrev = () => {
    setDesktopIndex((prev) => (prev > 0 ? prev - 1 : profiles.length - 1));
  };

  const handleDesktopNext = () => {
    setDesktopIndex((prev) => (prev < profiles.length - 1 ? prev + 1 : 0));
  };

  if (!isMobile) {
    return (
      <div className={styles.desktopContainer}>
        <div className={styles.desktopCard}>
          <div className={styles.desktopContent}>
            <h2 className={styles.name}>{profiles[desktopIndex].name}</h2>
            <p className={styles.role}>{profiles[desktopIndex].role}</p>
            <p className={styles.description}>{profiles[desktopIndex].description}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={profiles[desktopIndex].image}
              alt={profiles[desktopIndex].name}
              width={200}
              height={200}
              className={styles.image}
            />
          </div>
        </div>

        <button
          onClick={handleDesktopPrev}
          className={`${styles.desktopButton} ${styles.prevButton}`}
        >
          <Image
            src="/images/speakleft.svg"
            alt="Previous"
            width={24}
            height={24}
            className={styles.arrow}
          />
        </button>
        <button
          onClick={handleDesktopNext}
          className={`${styles.desktopButton} ${styles.nextButton}`}
        >
          <Image
            src="/images/speakright.svg"
            alt="Next"
            width={24}
            height={24}
            className={styles.arrow}
          />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {profiles.map((profile, index) => (
            <div key={index} className={styles.emblaSlide}>
              <div className={styles.mobileCard}>
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={150}
                  height={150}
                  className={styles.mobileImage}
                />
                <div className={styles.mobileContent}>
                  <h2 className={styles.name}>{profile.name}</h2>
                  <p className={styles.role}>{profile.role}</p>
                  <p className={styles.description}>{profile.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className={`${styles.desktopButton} ${styles.prevButton}`}
      >
        <Image
          src="/images/speakleft.svg"
          alt="Previous"
          width={24}
          height={24}
          className={styles.arrow}
        />
      </button>
      <button
        onClick={scrollNext}
        className={`${styles.desktopButton} ${styles.nextButton}`}
      >
        <Image
          src="/images/speakright.svg"
          alt="Next"
          width={24}
          height={24}
          className={styles.arrow}
        />
      </button>
    </div>
  );
};

export default Profile;