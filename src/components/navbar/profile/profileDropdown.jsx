import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./profileDropdown.css";
import { useAuth } from "../../contextprovider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { toast } from "react-toastify";

function ProfileDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { userEmail } = useAuth();

  // Toggle profile dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userEmail");
      toast.success("Logged out successfully", { position: "top-right", theme: "dark" });
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="user-options" onClick={toggleDropdown}>
      <div
        className="option"
        role="button"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        tabIndex={0}
      >
        <i
          className="bi bi-person"
          style={{
            fontSize: "1.75rem",
            color: "#fff",
            cursor: "pointer",
          }}
        ></i>
        <span className="option-text">Profile</span>
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef} className="profile-dropdown-container">
          <ul className="profile-dropdown">
            <li>
              {!userEmail ? (
                <Link to="/login">
                  <div className="btn btn-primary login-button">Login</div>
                </Link>
              ) : (
                <div
                  className="btn btn-primary login-button"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              )}
            </li>
            <li className="prolink">
              <Link to="/cart">Orders</Link>
            </li>
            <li className="prolink">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="prolink">
              <Link to="/giftcards">Gift Cards</Link>
            </li>
            <li className="prolink">
              <Link to="/coupons">Coupons</Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default ProfileDropdown;
