import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbarstyles.css";

import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>
        <Link to='/'></Link>Yokan{" "}
      </h1>
      <div className='menu-icons' onClick={toggleFunction}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
