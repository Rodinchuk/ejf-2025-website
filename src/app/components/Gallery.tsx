"use client";

import styles from "./Gallery.module.css";
import Image from "next/image";

const gridImages = [
  // Верхній ряд (1-ий)
  "/images/gallery1.jpeg", "/images/gallery2.jpeg", "/images/gallery3.jpeg",
  "/images/gallery6.jpeg", "/images/gallery7.jpeg", "/images/gallery8.jpeg",
  "/images/gallery11.jpeg", "/images/gallery12.jpeg", "/images/gallery13.jpeg",

  // Нижній ряд (2-ий)
  "/images/gallery1.jpeg", "/images/gallery4.jpeg", "/images/gallery5.jpeg",
  "/images/gallery6.jpeg", "/images/gallery9.jpeg", "/images/gallery10.jpeg",
  "/images/gallery11.jpeg", "/images/gallery14.jpeg", "/images/gallery15.jpeg",
];

const tallIndices = [0, 3, 6, 9, 12, 15]; // Індекси "високих" зображень

export default function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Наша Галерея</h2>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {[...gridImages, ...gridImages].map((src, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                tallIndices.includes(index % gridImages.length)
                  ? styles.tall
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={350}
                height={200}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
