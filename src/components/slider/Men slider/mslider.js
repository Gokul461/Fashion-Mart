import React from 'react';
import menban1 from '../../../assets/images/menban1.jpg';
import menban2 from '../../../assets/images/menban2.jpg';
import menban3 from '../../../assets/images/menban3.jpg';
import menban4 from '../../../assets/images/menban4.avif';
import menban5 from '../../../assets/images/menban5.jpg';
import '../slider.css';

const Menslider = () => {
  return (
    <div className='container-fluid p-0 menslider'>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1500"
        style={{ maxWidth: '100vw', width: '100%', margin: '0 auto' }}
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={menban3} alt="Slide 1" loading="lazy" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={menban2} alt="Slide 2" loading="lazy" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={menban1} alt="Slide 3" loading="lazy" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={menban4} alt="Slide 4" loading="lazy" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={menban5} alt="Slide 5" loading="lazy" />
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
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

export default Menslider;
