import React, { useState } from "react";
import "./MotDePasseOublie.css";

const MotDePasseOublie = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Veuillez entrer votre adresse e-mail 🌸");
      return;
    }

    alert(
      `Si un compte existe pour ${email}, un lien de réinitialisation vous sera envoyé 💐`
    );

    setEmail("");
  };

  return (
    <div className="motdepasse-page">
      {/* Bannière */}
      <div className="motdepasse-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Mot de passe oublié ?</h1>
          <p className="banner-subtitle">
            Entrez votre adresse e-mail pour recevoir un lien de
            réinitialisation.
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <div className="motdepasse-form-container">
        <form className="motdepasse-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Réinitialiser mon mot de passe</h2>

          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Ex : JohnSmith@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="motdepasse-btn">
            Envoyer le lien
          </button>

          <p className="retour-link">
            <a href="/connection" className="link">
              ← Retour à la connexion
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default MotDePasseOublie;
