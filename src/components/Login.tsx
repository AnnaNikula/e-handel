import React, { useState } from "react";
import "../styles/Login.css";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData") || "[]");

    // Validate credentials
    const user = storedData.find(
      (user: { email: string; password: string }) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      alert("Inloggning lyckades!");
      // Redirect to "Produkter" page
      window.location.href = "/ProductList";
    } else {
      alert("Felaktiga inloggningsuppgifter. Försök igen.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
        <h1>Logga in</h1>
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
        <button type="submit" className="submit-button">
          Logga in
        </button>
      </form>
    </div>
  );
};

export default Login;
