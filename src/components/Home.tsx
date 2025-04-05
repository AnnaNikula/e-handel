import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importera useNavigate
import "../styles/Shared.css";
import transportImage from "../assets/transport.png";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate(); // Använd useNavigate för omdirigering

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedData);

      if (email === storedEmail && password === storedPassword) {
        setLoginMessage("Inloggning lyckades! Välkommen tillbaka.");
        navigate("/products"); // Omdirigera till produktsidan
      } else {
        setLoginMessage("Fel e-post eller lösenord. Försök igen.");
      }
    } else {
      setLoginMessage("Ingen användardata hittades. Registrera dig först.");
    }
  };

  return (
    <div className="home-container">
      <div className="home-intro">
        <h1>Livsmedel i stora volymer - för ett kök som växer med kvalitet</h1>
        <p>
          Hos Trade AB hittar du färskvaror som lyfter din verksamhet. Vi erbjuder ett brett och komplett sortiment av frukt och grönt, kött, fågel, fisk, skaldjur och delikatesser - med egen import och noggrann förädling för att säkerställa högsta kvalitet.
        </p>
        <p>
          Vi vänder oss till företag som köper i större volymer och söker en pålitlig partner inom livsmedel. Med vår expertis, våra engagerade specialister och leveranser upp till 6 dagar i veckan får du både trygghet och flexibilitet.
        </p>
        <p>
          Bli företagskund hos Trade AB och ta del av alla fördelar - registrera dig redan idag!
        </p>
        <img src={transportImage} alt="transport av livsmedel" className="home-image" />
      </div>
      <div className="login-container floating-login">
        <form onSubmit={handleLogin} className="login-form">
          <h1>Logga in</h1>
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Logga in
          </button>
          {loginMessage && <p className="login-message">{loginMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Home;
