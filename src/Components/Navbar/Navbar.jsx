import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./navbar.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navba">
      <div className="nav-logo">
        <img src={logo} alt="logo" />

        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          {" "}
          <p>CSKN AVM</p>{" "}
        </Link>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                textDecoration: "none",
              };
            }}
            to="/"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                textDecoration: "none",
              };
            }}
            to="/mens"
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                textDecoration: "none",
              };
            }}
            to="/womens"
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
                textDecoration: "none",
              };
            }}
            to="/kids"
          >
            Kids
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="cart">
          <img src={cart_icon} alt="cart" />{" "}
        </NavLink>
        <div className="nav-cart-count"> {getTotalCartItems()} </div>
      </div>
    </div>
  );
};

export default Navbar;
