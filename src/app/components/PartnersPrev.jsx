import react from 'react';
import './PartnersPrev.css';
import waveUp from "../../../public/images/bg-hero.png";
import Image from "next/image";
export default function PartnersPrev(){
    return(
        <div className='pbackground'>
        <section className='partners-section width-container'>
            
        <img src="./images/pball1.png" className="pball1" />
            <img src="./images/pball2.png" className="pball2" />
            <img src="./images/pball3.png" className="pball3" />
            <img src="./images/pball4.png" className="pball4" />
            <img src="./images/pball5.png" className="pball5" />
            <img src="./images/pball6.png" className="pball6" />
            <img src="./images/pball7.png" className="pball7" />
            <h2 className='ptitle'>Наші партнери</h2>
            <div className="partners">
                <img src="./images/p10.png" className='partner'></img>
                <img src="./images/p15.png" className='partner'></img>
                <img src="./images/kpmg.png" className='partner'></img>

            </div>
        </section>
                    <Image src={waveUp} alt="Wave" className="wave-up" style={{ transform: 'translateY(5%)' }}/>
        </div>
    )
}