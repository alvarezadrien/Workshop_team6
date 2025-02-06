import { useEffect } from "react";
import "../styles/Welcome.css";

const WelcomePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 40000); // Ferme le pop-up après 40 secondes

    return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img
          src="../images/flower_popup.png"
          alt="Fleur de bienvenue"
          className="popup-flower"
        />
        <h2>Bienvenue chez notre fleuriste !</h2>
        <button className="popup-button" onClick={onClose}>
          Entrer
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
