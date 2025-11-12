import React from "react";
import "./Mariage.css";

const Mariage = () => {
  return (
    <>
      {/* SECTION 1 : Présentation */}
      <div className="container_mariage1">
        <div className="div_maria1">
          <h1>Faites fleurir votre grand jour avec élégance et raffinement</h1>
          <p>
            Découvrez nos créations florales sur mesure pour un mariage
            inoubliable.
          </p>
          <button className="btn_mariage">Obtenir un devis</button>
        </div>

        <div className="div_maria2">
          <img
            src="/images/mariage_fleurs1.jpg"
            alt="Bouquet de mariage"
            className="image_mariage"
          />
        </div>
      </div>

      <hr />

      {/* SECTION 2 : Nos services */}
      <section className="services_mariage">
        <h2>Nos services</h2>
        <div className="grid_services">
          <div className="service_item">
            <img src="/images/Bouquet_mariee.jpg" alt="Service 1" />
            <h3>Bouquets de mariée</h3>
          </div>
          <div className="service_item">
            <img src="/images/fleurs_salle.webp" alt="Service 2" />
            <h3>Décoration de la salle</h3>
          </div>
          <div className="service_item">
            <img src="/images/table_fleurs.jpg" alt="Service 3" />
            <h3>Centres de table</h3>
          </div>
          <div className="service_item">
            <img src="/images/Arches_fleurs.jpg" alt="Service 4" />
            <h3>Arches fleuries</h3>
          </div>
          <div className="service_item">
            <img src="/images/Boutonniers_fleurs.jpg" alt="Service 5" />
            <h3>Boutonnières</h3>
          </div>
          <div className="service_item">
            <img src="/images/voiture_fleurs.jpg" alt="Service 6" />
            <h3>Décoration de voiture</h3>
          </div>
        </div>
      </section>

      {/* SECTION 3 : Bande Contact */}
      <div className="bande_contact_maria">
        <h3>Personnalisation & Contact</h3>
        <div className="bande_contact_buttons">
          <button className="btn_maria1">Contactez-nous</button>
          <span className="ou_texte">ou</span>
          <button className="btn_maria2">Obtenir un devis</button>
        </div>
      </div>
    </>
  );
};

export default Mariage;
