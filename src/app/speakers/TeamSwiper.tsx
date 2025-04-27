import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon, ArrowRightIcon, Scroll } from 'lucide-react';
import { useIsMobile } from '../use-mobile';
import styles from './TeamSwiper.module.css';

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "./images/hapaikaicozik.png"  },
    {
        name: "Андрій Раднічок",
        role: "IT Responsible of ІЯК 2025 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "./images/hapaikaicozik.png"  },
        {
          name: "Андрій Раднічок",
          role: "IT Responsible of ІЯК 2025 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image: "./images/hapaikaicozik.png"  },
          {
              name: "Андрій Раднічок",
              role: "IT Responsible of ІЯК 2025 4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              image: "./images/hapaikaicozik.png"  },
              {
                name: "Андрій Раднічок",
                role: "IT Responsible of ІЯК 2025 5",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "./images/hapaikaicozik.png"  },
                {
                    name: "Андрій Раднічок",
                    role: "IT Responsible of ІЯК 2025 6",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    image: "./images/hapaikaicozik.png"  },
       
];

const Profile = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      const onSelectCallback = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on('select', onSelectCallback);

      return () => {
        clearInterval(interval);
        emblaApi.off('select', onSelectCallback);
      };
    }
  }, [emblaApi]);

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
            <img src={profiles[desktopIndex].image} alt={profiles[desktopIndex].name} className={styles.image} />
          </div>
        </div>
        
        <button onClick={handleDesktopPrev} className={`${styles.desktopButton} ${styles.prevButton}`}>
          <img src="./images/speakleft.svg" alt="Previous" className={styles.arrow} />
        </button>
        <button onClick={handleDesktopNext} className={`${styles.desktopButton} ${styles.nextButton}`}>
          <img src="./images/speakright.svg" alt="Next" className={styles.arrow} />
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
                <img src={profile.image} alt={profile.name} className={styles.mobileImage} />
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
      <button onClick={scrollPrev} className={`${styles.desktopButton} ${styles.prevButton}`}>
          <img src="./images/speakleft.svg" alt="Previous" className={styles.arrow} />
        </button>
        <button onClick={scrollNext} className={`${styles.desktopButton} ${styles.nextButton}`}>
          <img src="./images/speakright.svg" alt="Next" className={styles.arrow} />
        </button>
    </div>
  );
};

export default Profile;
