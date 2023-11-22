import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./navbar.css";

const NavItem = ({ menu, setMenu, name, linkTo }) => (
  <li onClick={() => setMenu(name)}>
    <Link to={linkTo}>{name}</Link>
    {menu === name && <hr />}
  </li>
);

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ADDEM</p>
      </div>
      <ul className="nav-menu">
        <NavItem menu={menu} setMenu={setMenu} name="shop" linkTo="/" />
        <NavItem menu={menu} setMenu={setMenu} name="mens" linkTo="/mens" />
        <NavItem menu={menu} setMenu={setMenu} name="womens" linkTo="/womens" />
        <NavItem menu={menu} setMenu={setMenu} name="kids" linkTo="/kids" />
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" className="crt-icn" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
