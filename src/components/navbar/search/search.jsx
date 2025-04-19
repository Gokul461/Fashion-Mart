import React, { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';
import Searchicon from '../../../assets/images/search.png';
import all_products from '../../../assets/images/all_product';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const performSearch = () => {
    if (!query.trim()) {
      navigate('/');
    } else {
      const filtered = all_products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.id.toString().includes(query.toLowerCase())
      );
      navigate('/search-results', { state: { filteredProducts: filtered } });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const handleClear = () => {
    setQuery(''); 
    navigate('/');
  };

  return (
    <div className="search-bar-container">
      <span className="search-bar-icon" onClick={performSearch} style={{ cursor: 'pointer' }}>
        <img src={Searchicon} alt="search_icon" />
      </span>
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for products, brands and more"
        aria-label="search"
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      {query && (
        <span className="clear-icon" onClick={handleClear} style={{ cursor: 'pointer' }}>
          &#10005; 
        </span>
      )}
    </div>
  );
};

export default SearchBar;
