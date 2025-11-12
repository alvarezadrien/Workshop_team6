import React from "react";
import { useNavigate } from "react-router-dom";
import "./Funerailles.css";

const Funerailles = () => {
  const navigate = useNavigate();

  const handleDevisClick = () => {
    navigate("/Formulaire devis");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* SECTION 1 : Présentation */}
      <div className="container_funerailles1">
        <div className="div_fune1">
          <h1>Honorez la mémoire de vos proches avec douceur et sérénité.</h1>
          <p>
            Des compositions florales empreintes de respect et de tendresse pour
            accompagner vos adieux.
          </p>
          <button className="btn_fune" onClick={handleDevisClick}>
            Obtenir un devis
          </button>
        </div>

        <div className="div_fune2">
          <img
            src="/images/funerailles_fleurs.jpg"
            alt="Composition funéraire"
            className="image_fune"
          />
        </div>
      </div>

      <hr />

      {/* SECTION 2 : Nos services */}
      <section className="services_funerailles">
        <h2>Nos services funéraires</h2>
        <div className="grid_fune_services">
          <div className="fune_service_item">
            <img
              src="/images/Composition_florale_funeraires.jpg"
              alt="Service 1"
            />
            <h3>Compositions florales funéraires personnalisées</h3>
          </div>
          <div className="fune_service_item">
            <img src="/images/Couronnes_gerbes_deuil.jpg" alt="Service 2" />
            <h3>Couronnes et gerbes de deuil</h3>
          </div>
          <div className="fune_service_item">
            <img src="/images/Coussins_raquettes_deuil.jpg" alt="Service 3" />
            <h3>Coussins et raquettes de fleurs</h3>
          </div>
          <div className="fune_service_item">
            <img src="/images/Bouquet_condoleance.jpg" alt="Service 4" />
            <h3>Bouquets de condoléances</h3>
          </div>
          <div className="fune_service_item">
            <img
              src="/images/Decoration_florale_ceremonies_funeraires.jpg"
              alt="Service 5"
            />
            <h3>Décoration florale de cérémonies</h3>
          </div>
          <div className="fune_service_item">
            <img src="/images/Fleurs_hurnes.jpg" alt="Service 6" />
            <h3>Décoration d’urnes funéraires</h3>
          </div>
        </div>
      </section>

      {/* SECTION 3 : Bande Contact */}
      <div className="bande_contact_fune">
        <h3>Personnalisation & Contact</h3>
        <div className="bande_contact_fune_buttons">
          <button className="btn_fune1" onClick={handleContactClick}>
            Contactez-nous
          </button>
          <span className="ou_texte_fune">ou</span>
          <button className="btn_fune2" onClick={handleDevisClick}>
            Obtenir un devis
          </button>
        </div>
      </div>
    </>
  );
};

export default Funerailles;
