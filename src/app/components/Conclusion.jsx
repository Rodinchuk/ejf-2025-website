import Image from "next/image";
import styles from "./Conclusion.module.css";
import WaveUp from '../../../public/images/bg-hero.png'

const Conclusion = () => {
  return (
    <div className={styles.conclusion}>
      
      <div className={styles.conclusioncontainer}>
      <div className={styles.imageWrapper}>
        <Image 
        src={WaveUp} 
        alt="img"
        fill 
        className={styles.conclusionWave}
        style={{ objectFit: 'cover', objectPosition: 'center' }} 
        priority 
        />
        
      </div>
      <div className={styles.conclusioncontent}>
        
        <h2 className={styles.title}>Інвестуй у майбутнє!</h2>
        <p className={styles.description}></p>
        <a href="#partnership" className={styles.conclusionlink}>
        <button className={styles.conclusionbutton}>Стати учасником</button>
        <button className={styles.conclusionpbutton}>Стати партнером</button>
        
        </a>
        <div className={styles.conclusionballs}> 
        <img src="./images/pball1.png" className={styles.cball1} />
        <img src="./images/pball2.png" className={styles.cball2} />
        <img src="./images/pball3.png" className={styles.cball3} />
        <img src="./images/pball4.png" className={styles.cball4} />
        <img src="./images/pball5.png" className={styles.cball5} />
        <img src="./images/pball6.png" className={styles.cball6} />
        <img src="./images/pball7.png" className={styles.cball7} /></div>
      </div>
      </div>
      
    </div>
    );
};

export default Conclusion;
