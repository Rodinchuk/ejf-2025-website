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
    name: "Андрій Раднічок",
    role: "IT Responsible of ІЯК 2025 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hapaikaicozik.png",
  },
  {
    name: "Андрій Раднічок",
    role: "IT Responsible of ІЯК 2025 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hapaikaicozik.png",
  },
  {
    name: "Андрій Раднічок",
    role: "IT Responsible of ІЯК 2025 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hapaikaicozik.png",
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