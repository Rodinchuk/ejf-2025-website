"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./TeamSwiper.css";
import waveUp from "../../../public/images/waveUp.png";
import Image from "next/image";

export default function TeamSwiper() {
    const teamMembers = [
        { name: "Софія", surname: "Герус", role: "Відповідальна за корпоративні зв'язки", img: "/coreteam/CR_S.png" },
        { name: "Максим", surname: "Сеньків", role: "Головний організатор", img: "/coreteam/MO.png" },
        { name: "Діана", surname: "Степко", role: "Відповідальна за корпоративні зв'язки", img: "/coreteam/CR_D.png" },
        { name: "Софія", surname: "Чемерис", role: "Відповідальна за людські ресурси", img: "/coreteam/HR.png" },
        { name: "Андрій", surname: "Родінчук", role: "Відповідальний за технічну частину", img: "/coreteam/IT.png" },
        { name: "Анна", surname: "Медзин", role: "Відповідальна за логістичне забезпечення", img: "/coreteam/LG.png" },
        { name: "Катерина", surname: "Мацейко", role: "Відповідальна за зв'язки з громадськістю", img: "/coreteam/PR_K.png" },
        { name: "Вікторія", surname: "Шийка", role: "Відповідальна за зв'язки з громадськістю", img: "/coreteam/PR_V.png" },
        { name: "Анна", surname: "Гащук", role: "Дизайнер", img: "/coreteam/DS.png" },
        { name: "Святослав", surname: "Гонський", role: "Відповідальний за наповнення", img: "/coreteam/CT.png" },
        { name: "Богдан", surname: "Горбачов", role: "Ментор", img: "/coreteam/MT.png" },
    ];

    return (
        <div className="team-background">
            <Image src={waveUp} alt="Wave" className="wave-up" style={{ transform: 'translateY(60%)' }} />
          
            <section className="team-section">
                <h2 className="team-title">Команда організаторів</h2>
                <Image src="/images/bsball1.png" alt="Background Ball 1" width={100} height={100} className="bsball1" />
                <Image src="/images/bsball2.png" alt="Background Ball 2" width={100} height={100} className="bsball2" />
                <Image src="/images/bsball3.png" alt="Background Ball 3" width={100} height={100} className="bsball3" />
                <Image src="/images/bsball4.png" alt="Background Ball 4" width={100} height={100} className="bsball4" />
                <div className="swiper-nav">
                    <button className="swiper-button-prev custom-swiper-button">
                        <Image 
                            src="/images/стрілкаправо.svg" 
                            alt="Previous" 
                            width={48} 
                            height={24} 
                            style={{ transform: 'scaleX(-1)' }}
                        />
                    </button>
                    <button className="swiper-button-next custom-swiper-button">
                        <Image 
                            src="/images/стрілкаправо.svg" 
                            alt="Next" 
                            width={48} 
                            height={24} 
                        />
                    </button>
                </div>

                <Swiper
                    className="team-swiper"
                    autoplay={{ delay: 5000 }}
                    mousewheel={false}
                    keyboard={{ enabled: true }}
                    grabCursor={true}
                    speed={1200}
                    loop={true}
                    centeredSlides={true}
                    slidesPerGroup={1} 
                    watchSlidesProgress={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel, Navigation]}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            slidesPerGroup: 1,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 1,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        scale: 0.5,
                        modifier: 1,
                        slideShadows: false,
                    }}
                >
                    {teamMembers.map((member, idx) => (
                        <SwiperSlide key={idx}>
                            <Image 
                                src={member.img}
                                alt={`${member.name} ${member.surname}`}
                                width={200}
                                height={200}
                                className="team-photo"
                            />
                            <div className="team-card">
                                <h3 className="team-name">{member.name}</h3>
                                <h1 className="team-name" style={{ marginTop: 0 }}>{member.surname}</h1>
                                <hr style={{ width: '80%', height: '1px', backgroundColor: 'gray', margin: '10px auto', border: 'none' }} />
                                <p className="team-role">{member.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>                            
            </section>
        </div>
    );
}