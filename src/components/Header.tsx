import { Link } from "react-router-dom";
import "../styles/Shared.css"; // Koppling till Shared.css

function Header() {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register">Register</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
