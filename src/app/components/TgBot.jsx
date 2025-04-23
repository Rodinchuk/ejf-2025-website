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
            <ul>
              <li>Розкладу подій;</li>
              <li>Інформації про спікерів;</li>
              <li>Завантаження CV;</li>
              <li>Завдань для квесту;</li>
              <li>Оновлень та змін</li>
            </ul></div>
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
