import React from 'react';
import kid1 from '../../assets/images/mslide1.png';
import kid2 from '../../assets/images/mslide2.png';
import kid3 from '../../assets/images/mslide3.png';

import './slider.css'; 

const Disslider = () => {
  return (
    <div className='container-fluid mb-3 menslider'>
      <div
        id="dissliderCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1000"
        style={{ maxWidth: '100vw', margin: '0' }}
      >
        <ol className="carousel-indicators">
          <li data-target="#dissliderCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#dissliderCarousel" data-slide-to="1"></li>
          <li data-target="#dissliderCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={kid1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={kid2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={kid3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#dissliderCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#dissliderCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Disslider;
