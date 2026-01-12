import React from 'react';
import woman1 from '../../../assets/images/womenban1.avif';
import woman2 from '../../../assets/images/womanban2.avif';
import woman3 from '../../../assets/images/womanban3.webp';
import woman4 from '../../../assets/images/womanban4.avif';
import '../slider.css'; 

const Womanslider = () => {
  return (
    <div className='container mb-3 menslider'>
      <div
        id="womansliderCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1500"
        style={{ maxWidth: '90vw', margin: '0 auto' }}
      >
        <ol className="carousel-indicators">
          <li data-target="#womansliderCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#womansliderCarousel" data-slide-to="1"></li>
          <li data-target="#womansliderCarousel" data-slide-to="2"></li>
          <li data-target="#womansliderCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={woman1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={woman2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={woman3} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={woman4} alt="Fourth slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#womansliderCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#womansliderCarousel"
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

export default Womanslider;
