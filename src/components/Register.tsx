import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("userData") || "{}");

    if (storedData.email === formData.email) {
      alert("En användare med denna e-postadress är redan registrerad.");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Registrering lyckades!");

    // Redirect to ProductList page
    navigate("/ProductList");
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>E-Handel</h1>
        <input
          type="text"
          name="companyName"
          placeholder="Företagsnamn"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactPerson"
          placeholder="Kontaktperson"
          value={formData.contactPerson}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="Lösenord"
          value={formData.password}
          onChange={handleChange}
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
