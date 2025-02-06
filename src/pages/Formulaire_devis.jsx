import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Formulaire_devis.css";

const Formulaire_devis = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9m05vbv", // Service ID
        "template_0jcvkjj", // Template ID
        form.current,
        "b-uXyN8nNUMIp6-PL" // User ID (ou API Key publique)
      )
      .then(
        (result) => {
          setPopupVisible(true);
          form.current.reset();
        },
        (error) => {
          alert("Une erreur est survenue, veuillez réessayer.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="formulaire-devis">
      <h2 className="formulaire-devis__titre">
        Demande de Devis - Événement Privé
      </h2>
      <form ref={form} onSubmit={sendEmail} className="formulaire-devis__form">
        <label htmlFor="entreprise" className="formulaire-devis__label">
          Nom de l'entreprise
        </label>
        <input
          type="text"
          id="entreprise"
          name="entreprise"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="nom" className="formulaire-devis__label">
          Nom du contact
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="email" className="formulaire-devis__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="telephone" className="formulaire-devis__label">
          Numéro de téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="evenement" className="formulaire-devis__label">
          Type d’événement
        </label>
        <select
          id="evenement"
          name="evenement"
          required
          className="formulaire-devis__select"
        >
          <option value="">Sélectionnez</option>
          <option value="reception">Réception</option>
          <option value="gala">Gala</option>
          <option value="inauguration">Inauguration</option>
          <option value="autre">Autre</option>
        </select>

        <label htmlFor="date" className="formulaire-devis__label">
          Date de l’événement
        </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="lieu" className="formulaire-devis__label">
          Lieu de l’événement
        </label>
        <input
          type="text"
          id="lieu"
          name="lieu"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="invites" className="formulaire-devis__label">
          Nombre d’invités
        </label>
        <input
          type="number"
          id="invites"
          name="invites"
          required
          className="formulaire-devis__input"
        />

        <label htmlFor="besoins" className="formulaire-devis__label">
          Besoins floraux
        </label>
        <select
          id="besoins"
          name="besoins"
          required
          className="formulaire-devis__select"
        >
          <option value="">Sélectionnez</option>
          <option value="centre_table">Centres de table</option>
          <option value="arche_florale">Arche florale</option>
          <option value="bouquets">Bouquets décoratifs</option>
          <option value="mur_vegetal">Mur végétal</option>
          <option value="autre">Autre</option>
        </select>

        <label htmlFor="couleurs" className="formulaire-devis__label">
          Palette de couleurs / Thème
        </label>
        <input
          type="text"
          id="couleurs"
          name="couleurs"
          className="formulaire-devis__input"
        />

        <label htmlFor="budget" className="formulaire-devis__label">
          Budget approximatif (€)
        </label>
        <input
          type="number"
          id="budget"
          name="budget"
          required
          className="formulaire-devis__input"
        />

        <label className="formulaire-devis__checkbox-label">
          <input
            type="checkbox"
            name="conditions"
            required
            className="formulaire-devis__checkbox"
          />{" "}
          J'accepte les conditions générales
        </label>

        {popupVisible && (
          <div className="popup">
            <div className="popup__content">
              <img
                src="../images/flower_popup.png"
                alt="Image florale"
                className="popup__image"
              />
              <h2 className="popup__title">MERCI</h2>
              <p className="popup__description">
                Nous avons bien reçu votre demande de devis et vous remercions
                pour votre intérêt. Notre équipe vous recontactera sous peu avec
                une proposition adaptée à vos besoins.
              </p>
              <button
                onClick={() => setPopupVisible(false)}
                className="popup__button"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        <button type="submit" className="formulaire-devis__button">
          Demander un devis
        </button>
      </form>
    </div>
  );
};

export default Formulaire_devis;
