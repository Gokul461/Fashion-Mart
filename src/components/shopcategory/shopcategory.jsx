import React, { useContext } from "react";
// import { Link } from 'react-router-dom';
import Item from "../item/item";
import "./shopcategory.css";
import savingimg from "../../assets/images/discountimg2.jpg.png";
import { ShopContext } from "../Context/shopContext";
import Dropdown_icon from "../../assets/images/dropdown_icon.png";
import Dis from "../slider/disslide";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Ensure all_product is an array or default to an empty array
  const products = Array.isArray(all_product) ? all_product : [];

  return (
    <div className="shopcategory bg-white">
      <div className="shopcategory-banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-banner2">
        <img src={props.banner2} alt="" />
      </div>
      <div className="shopcategory-slider">{props.slider}</div>
      <div className="shopcategory-indexsort">
        <p className="product-count">
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          <span>Sort by</span>
          <img className="dropdown-icon" src={Dropdown_icon} alt="Sort Icon" />
        </div>
      </div>

      <div className="shopcategory-products mb-5">
        {products.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          products.map((item) => {
            if (props.category === item.category) {
              return (
                <>
                  <Item
                    name={item.name}
                    id={item.id}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </>
              );
            } else {
              return null;
            }
          })
        )}
      </div>
      <div className=" imgcont d-flex justify-content-between align-items-center">
        <img
          src={savingimg}
          className="img-fluid mt-2 mb-5 dis-img1"
          alt="Saving Illustration"
        />
      </div>
      <Dis />
    </div>
  );
};

export default ShopCategory;
