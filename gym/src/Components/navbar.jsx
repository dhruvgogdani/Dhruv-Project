// import React from 'react'

// const Navbar = () => {
//     return (
//         <>

//         </>
//     )
// }

// export default Navbar

import React from 'react';
import logoImage from '..//img/download (1).png';
import heroImage from '../img/hero_image.e19ac0c6b1009c7280f5.png';
import heroImageBack from '..//img/hero_image_back.9f54bfba33048f4ca688.png';
import dataimg from '..//img/download (3).png';
import heartimg from '..//img/download (2).png';
import './css/navbar.css';

const Hero = () => {
  return (
    <>
      {/*******************************/}

      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <div className="header" id="header">
            <img src={logoImage} alt="" className="logo" />
            <ul className="header-menu">
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Programs</a></li>
              <li><a href='/'>Why us</a></li>
              <li><a href='/'>Plans</a></li>
              <li><a href='/'>Testimonials</a></li>
            </ul>
          </div>
          <div className="the-best-ad">
            <div style={{ left: '203px' }}></div>
            <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          </div>
          <div className="hero-text">
            <div><span className="stroke-text">Shape </span><span>Your</span></div>
            <div><span>Ideal body</span></div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          </div>
          <div className="figures">
            <div>
              <span><div className="">+ 140</div></span><span>expert coaches</span>
            </div>
            <div>
              <span><div className="">+ 978</div></span><span>Members joined</span>
            </div>
            <div>
              <span><div className="">+ 50</div></span><span>fitness programs</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right-h">
          <button className="btn"><a href='/'>Join Now</a></button>
          <div className="heart-rate">
            <img src={heartimg} alt="/" /><span>Heart Rate</span><span>116 bpm</span>
          </div>
          <img className="hero-image" src={heroImage} alt="" />
          <img className="hero-image-back" src={heroImageBack} alt="" style={{ right: '20rem' }} />
          <div className="calories" style={{ right: '28rem' }}>
            <img src={dataimg} alt="/" />
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>

      {/*******************************/}

    </>

  );
};

export default Hero;
