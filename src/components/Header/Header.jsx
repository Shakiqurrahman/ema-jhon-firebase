import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../../providers/AuthProviders";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    .then(() => {})
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        {user && <span>{user.email} <button onSubmit={handleLogout}>Log Out</button></span> }
      </div>
    </nav>
  );
};

export default Header;
