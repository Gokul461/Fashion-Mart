import React from 'react';
import pay1 from '../../assets/images/payslide1.avif';
import pay2 from '../../assets/images/payslide2.avif';
import pay3 from '../../assets/images/payslide3.avif';
import pay4 from '../../assets/images/payslide4.avif';
import './slider.css'; 

const Paymentslider = () => {
  return (
    <div className='container mb-3 menslider my-5 bg-white'>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1500"
        style={{ maxWidth: '90vw', margin: '0 auto' }}
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={pay1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pay2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pay3} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pay4} alt="Fourth slide" />
          </div>
        </div>
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

export default Paymentslider;
