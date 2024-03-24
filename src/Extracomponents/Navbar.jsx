import React from "react";
import { Link } from "react-router-dom";
import style from "../Css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link className={style.change} to="/">
        Home
      </Link>
      <Link className={style.change} to="/login">
        Login
      </Link>
      <Link className={style.change} to="/product">
        Product
      </Link>
    </div>
  );
};

export default Navbar;
