"use client";
import { useState } from 'react';
import { CiCompass1 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-element">
      <div className="container-fluid">
        <a className="navbar-brand text-info" href="#">Mitesh DIxit</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-success">
              <a className="nav-link active" aria-current="page" href="#"><FaHome className='icon-style'/>Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-success" href="#"><FaRegStar className='icon-style'/>Hobbies</a>
            </li>
            <li className="nav-item dropdown text-success">
              <a
                className="nav-link dropdown-toggle text-success"
                href="#"
                role="button"
                onClick={(e) => { e.preventDefault(); toggleDropdown(); }}
              >
               <CiCompass1 className='icon-style'/> explore
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show mt-2 text-success' : ''}`}>
                <li><a className="dropdown-item" href="#">outDoor</a></li>
                <li><a className="dropdown-item" href="#">Yoga</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
