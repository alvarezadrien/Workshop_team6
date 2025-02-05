import React from "react";
import "../styles/Formulaire_devis.css";

const Contact = () => {
  return (
    <div>
      <h2>Demande de Devis - Événement Privé</h2>
      <form>
        <label htmlFor="entreprise">Nom de l'entreprise</label>
        <input type="text" id="entreprise" name="entreprise" required />

        <label htmlFor="nom">Nom du contact</label>
        <input type="text" id="nom" name="nom" required />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telephone">Numéro de téléphone</label>
        <input type="tel" id="telephone" name="telephone" required />

        <label htmlFor="evenement">Type d’événement</label>
        <select id="evenement" name="evenement" required>
          <option value="">Sélectionnez</option>
          <option value="reception">Réception</option>
          <option value="gala">Gala</option>
          <option value="inauguration">Inauguration</option>
          <option value="autre">Autre</option>
        </select>

        <label htmlFor="date">Date de l’événement</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="lieu">Lieu de l’événement</label>
        <input type="text" id="lieu" name="lieu" required />

        <label htmlFor="invites">Nombre d’invités</label>
        <input type="number" id="invites" name="invites" required />

        <label htmlFor="besoins">Besoins floraux</label>
        <select id="besoins" name="besoins" required>
          <option value="">Sélectionnez</option>
          <option value="centre_table">Centres de table</option>
          <option value="arche_florale">Arche florale</option>
          <option value="bouquets">Bouquets décoratifs</option>
          <option value="mur_vegetal">Mur végétal</option>
          <option value="autre">Autre</option>
        </select>

        <label htmlFor="couleurs">Palette de couleurs / Thème</label>
        <input type="text" id="couleurs" name="couleurs" />

        <label htmlFor="budget">Budget approximatif (€)</label>
        <input type="number" id="budget" name="budget" required />

        <label>
          <input type="checkbox" name="conditions" required /> J'accepte les
          conditions générales
        </label>

        <button type="submit">Demander un devis</button>
      </form>
    </div>
  );
};

export default Contact;
