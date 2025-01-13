import React from 'react';
import './search.css'
import Searchicon from '../../../assets/images/search.png'
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <span className="search-bar-icon"><img src={Searchicon} alt="seacrh_icon"></img></span>
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for products, brands and more"
        aria-label="search"
      />
    </div>
  );
};

export default SearchBar;