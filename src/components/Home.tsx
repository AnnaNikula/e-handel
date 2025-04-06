import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added import
import "../styles/Home.css";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

    // Validate credentials
    if (
      storedData.email === formData.email &&
      storedData.password === formData.password
    ) {
      alert("Inloggning lyckades!");
      // Redirect to ProductList page
      navigate("/ProductList");
    } else {
      alert("Felaktiga inloggningsuppgifter. Försök igen.");
    }
  };

  return (
    <div className="home-container">
      <h1>Välkommen till E-Handel</h1>
      <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
        <h2>Logga in</h2>
        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Lösenord"
          value={formData.password}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <button type="submit" className="login-button">
          Logga in
        </button>
      </form>
    </div>
  );
};

export default Home;
