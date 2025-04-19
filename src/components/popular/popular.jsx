import React from 'react';
import Item from '../item/item';
import data_product from '../../assets/images/data'; 
import savingimg from '../../assets/images/saving.png'; 
import './popular.css';
import Disimg from '../../assets/images/discountimg.jpg';

const Popular = () => {
  return (
    <div className="pop">
      <div className="popular-discount ms-3 bg-white">
        <h1 className="couponname d-flex justify-content-center align-items-center">
          Coupon Corner
        </h1>
        <div className=" imgcont d-flex justify-content-between align-items-center">
          <img
            src={savingimg}
            className="img-fluid ms-5 mt-2 dis-img1"
            alt="Saving Illustration"
          />
          <img
            src={Disimg}
            className=" disimg img-fluid me-3 mt-2 dis-img1"
            alt="Discount Illustration"
          />
        </div>
      </div>

      <div className="contain main my-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Popular in Women</h2>
        </div>
        <div className="row">
          {data_product.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
