import styles from './Schedule.module.css';

export default function Schedule() {
return (
    <section  id="home" className={styles.scheduleSection}>
        <div className={styles.scheduleWrapper}>
            <div className={styles.day}>
                <h2>28 травня</h2>
                <ul>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>9:45</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Відкриття ІЯК 2025</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>10:05</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Активність</span><br /><span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Спікер 1, Спікер 2</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>11:05</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}} >Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>11:25</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Інфозони</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>13:15</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Співбесіди</span> </li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>14:35</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>14:50</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}}className={styles.eventies}>Активність</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>15:55</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>16:10</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Активність</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>17:15</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Закриття першого дня</span></li>
                </ul>
            </div>

            <div className={styles.day}>
                <h2>29 травня</h2>
                <ul>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>9:45</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Відкриття другого дня</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>10:05</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Активність</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>11:05</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>11:25</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Інфозони</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>13:15</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>13:30</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Активність</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>14:40</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>15:00</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Активність</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>16:10</span> <span style={{color: "#767676", fontSize: "14px", fontWeight: "400"}}>Перерва</span></li>
                    <li><span style={{color: "#767676", fontWeight: "400"}}>16:30</span> <span style={{color: "#257BFC", fontSize: "21px", fontWeight: "700"}} className={styles.eventies}>Розіграші + закриття ІЯК 2025</span></li>
                </ul>
            </div>
        </div>
    </section>
);
}
