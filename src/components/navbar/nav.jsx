import React from 'react';
import Logo from '../../assets/images/logo3.jpeg';
import Bag_Logo from '../../assets/images/bag.png';
import SearchBar from './search/search';
import ProfileDropdown from './profile/profileDropdown';
import './nav.css';
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li className="logo">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item text-decoration-none" to="/men">MEN</Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item text-decoration-none" to="/women">WOMEN</Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item text-decoration-none" to="/kids">KIDS</Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item text-decoration-none" to="/homeandliving">HOME & LIVING</Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item text-decoration-none" to="/beauty">BEAUTY</Link>
          </li>

          <li className="search-bar">
            <SearchBar />
          </li>
          <ProfileDropdown  />
          <li className="user-options wish ms-3">
          <Link className="menu-item text-decoration-none" to="/wishlist">
          <div className="option d-flex align-items-center gap-2">
          <i 
            className={`bi bi-heart`} 
            style={{
              fontSize: '1.35rem',
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
            }}
          ></i>
            <span>Wishlist</span>
            </div>
          </Link>
          </li>
          <li className="user-options">
          <Link to="/cart" className="nav-link">
            <div className="option">
              <img src={Bag_Logo} alt="Bag" />
              <span className='mt-2'>Bag</span>
            </div>
          </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Nav;
