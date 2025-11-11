import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Inscription.css";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    motDePasse: "",
    confirmerMotDePasse: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      alert("Les mots de passe ne correspondent pas 🌸");
      return;
    }

    alert(`Bienvenue ${formData.nom} ! Votre compte a bien été créé 💐`);
  };

  return (
    <div className="inscription-page">
      {/* Bannière */}
      <div className="inscription-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Créer un compte</h1>
          <p className="banner-subtitle">
            Rejoignez notre univers floral et profitez d’offres exclusives.
          </p>
        </div>
      </div>

      {/* Formulaire d'inscription */}
      <div className="inscription-form-container">
        <form className="inscription-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Inscription</h2>

          <div className="form-group">
            <label htmlFor="nom">Nom complet</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Ex : John Smith"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex : JohnSmith@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Ex : 0471 23 45 67"
              value={formData.telephone}
              onChange={handleChange}
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
                name="motDePasse"
                placeholder="••••••••"
                value={formData.motDePasse}
                onChange={handleChange}
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

          {/* Confirmation mot de passe avec icône */}
          <div className="form-group password-group">
            <label htmlFor="confirmerMotDePasse">
              Confirmer le mot de passe
            </label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmerMotDePasse"
                name="confirmerMotDePasse"
                placeholder="••••••••"
                value={formData.confirmerMotDePasse}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="inscription-btn">
            Créer mon compte
          </button>

          <p className="connexion-link">
            Déjà inscrit ?{" "}
            <a href="/connection" className="link">
              Connectez-vous
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
