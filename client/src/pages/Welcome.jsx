import React, { useState } from "react";
import "../styles/Welcome.css";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <img
          src="../images/flower_popup.png" // Assure-toi que l'image est bien à cet endroit
          alt="Popup"
          className="popup-image"
        />
        <h2>Bienvenue sur notre site de fleurs !</h2>
        <button onClick={handleClose} className="close-button">
          Entrer
        </button>
      </div>
    </div>
  );
};

export default Welcome;
