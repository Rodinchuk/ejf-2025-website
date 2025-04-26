"use client";
import styles from './TgBot.module.css';
import Emoji from "@/app/components/Emoji";

export default function TelegramBot() {
  return (
    <div id="bot"className={styles.botHangar}>
      <div className={styles.commandCenter}>
        <h2 className={styles.transmissionTitle}>Telegram Бот</h2>
        <div className={styles.transmissionBody}>
          <div className={styles.dataModule}>
            <div className={styles.botText}>
            <p>Отримай доступ до:</p>
            <>
            <ul className="custom-list">
              <li><span className="emoji"><Emoji symbol="🔹" /></span> Розкладу подій;</li>
              <li><span className="emoji"><Emoji symbol="🔹" /></span> Інформації про спікерів;</li>
              <li><span className="emoji"><Emoji symbol="🔹" /></span> Завантаження CV;</li>
              <li><span className="emoji"><Emoji symbol="🔹" /></span> Завдань для квесту;</li>
              <li><span className="emoji"><Emoji symbol="🔹" /></span> Оновлень та змін</li>
            </ul>
            <style jsx>{`
        .custom-list {
          list-style: none !important;
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
    </div>
            <a href="https://t.me/your_bot_link" target="_blank" rel="noopener noreferrer" className={styles.accessPortal}>
              У нашому Telegram боті <Emoji symbol="🤩" />
            </a>
          </div>
          <img src="./images/telegram-bot.png" alt="Бот" className={styles.robotAvatar} />
        </div>
      </div>
    </div>
  );
}
