import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/Produkter">Produkter</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;