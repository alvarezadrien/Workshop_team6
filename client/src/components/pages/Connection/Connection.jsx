import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Connection.css";

const Connection = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue, ${email} 🌸`);
  };

  return (
    <div className="connection-page">
      {/* Bannière */}
      <div className="connection-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Connexion à votre espace</h1>
          <p className="banner-subtitle">
            Rejoignez la communauté florale et suivez vos commandes avec amour.
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <div className="connection-form-container">
        <form className="connection-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Se connecter</h2>

          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              placeholder="exemple@fleurs.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Mot de passe avec icône */}
          <div className="form-group password-group">
            <label htmlFor="motDePasse">Mot de passe</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="motDePasse"
                placeholder="Votre mot de passe"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="connection-btn">
            Se connecter
          </button>

          {/* Liens inscription + mot de passe oublié */}
          <div className="links-container">
            <p className="inscription-link">
              <a href="/inscription" className="link">
                Créez votre compte
              </a>
            </p>
            <span className="separator">|</span>
            <p className="forgot-link">
              <a href="/Mot de passe oublié" className="link">
                Mot de passe oublié ?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connection;
