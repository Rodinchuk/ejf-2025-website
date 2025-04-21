"use client"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    position: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_public_key"
      )
      .then(
        () => {
          alert("Дякуємо! Заявка надіслана.");
          setShowModal(false);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Виникла помилка. Спробуйте ще раз.");
        }
      );
  };

  return (
    <div className={styles.container}>
                <h2 className={styles.title}>Контакти</h2>

      <div className={styles.cardWrapper}>
        <div className={`${styles.imageWrapper} hidden md:block`}>
          <img
            src="./images/maksym.jpg"
            alt="Максим Сеньків"
            className={styles.image}
          />
        </div>

        <div className={styles.contactInfo}>
          <p className={styles.name}>Сеньків Максим</p>
          <p className={styles.role}>головний організатор</p>
          <div className={styles.details}>
            <p>📞 +380 66 638 5322</p>
            <p>✉️ maksym.senkiv@best-eu.org</p>
          </div>
          <p className={styles.description}>
            Бажаєте долучитися до заходу як партнер? Заповніть форму і ми обов’язково з Вами зв’яжемось!
          </p>
          <button
            onClick={() => setShowModal(true)}
            className={styles.primaryButton}
          >
            Співпрацювати
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              onClick={() => setShowModal(false)}
              className={styles.closeButton}
            >
              ✕
            </button>
            <h3 className={styles.modalTitle}>Стати партнером ІЯК 2025</h3>
            <form onSubmit={sendEmail} className={styles.form}>
              <input
                type="text"
                name="company"
                placeholder="Назва компанії"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Ваше ім’я та прізвище"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Ваша посада і контакт"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефону"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Співпрацювати
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}