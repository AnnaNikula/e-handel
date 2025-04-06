import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Hem</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register">Registrera</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Kontakt</Link>
        </li>
        <li className="navbar-item">
          <Link to="/ProductList">Produkter</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
