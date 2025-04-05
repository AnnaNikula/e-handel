import React, { useState } from "react";
import "../styles/Register.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Registrering lyckades!");

    // Redirect to home page with login form
    window.location.href = "/";
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form" autoComplete="off">
        <h1>Registrera dig</h1>
        <input
          type="text"
          name="companyName"
          placeholder="Företagsnamn"
          value={formData.companyName}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="contactPerson"
          placeholder="Kontaktperson"
          value={formData.contactPerson}
          onChange={handleChange}
          autoComplete="off"
          required
        />
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
          Registrera
        </button>
      </form>
    </div>
  );
};

export default Register;
