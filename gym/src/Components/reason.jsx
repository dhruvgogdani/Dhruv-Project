import React from 'react';
import './css/reason.css';
import img1 from '../img/image1.1091417d32e491f0bbb6.png';
import img2 from '../img/image2.82da8b2725df896d8a8e.png';
import img3 from '../img/image3.69484cb0ee7687a8c28b.png';
import img4 from '../img/image4.2c0d30b9ce1579eb1109.png';
import dataimg from '../img/download (5).png'
import data1 from '../img/download (6).png';
import data2 from '../img/download (7).png';
import data3 from '../img/download (8).png';

function Reason() {
    return (
        <div className="reasons" id="reasons">
            <div className="left-r">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">Why</span>
                    <span>choose us?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={dataimg} alt='/' />
                        <span>over 140+ expert coachs</span>
                    </div>
                    <div>
                        <img src={dataimg} alt="/" />
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={dataimg} alt="/" />
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={dataimg} alt="/" />
                        <span>reliable partners</span>
                    </div>

                </div>
                <span style={{ color: 'var(--gray)', fontWeight: 'normal' }}>OUR PARTNERS</span>

                <div className='partners'>
                    <img src={data1} alt="/" />
                    <img src={data2} alt="/" />
                    <img src={data3} alt="/" />
                </div>
            </div>
        </div>
    );
}

export default Reason;
