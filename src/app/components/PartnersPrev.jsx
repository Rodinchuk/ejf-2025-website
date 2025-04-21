import react from 'react';
import './PartnersPrev.css';
export default function PartnersPrev(){
    return(
        <section className='partners-section width-container'>
            <h2 className='ptitle'>Наші партнери</h2>
            <div className="partners">
                <img src="./images/p10.png" className='partner'></img>
                <img src="./images/p15.png" className='partner'></img>
            </div>
        </section>
    )
}