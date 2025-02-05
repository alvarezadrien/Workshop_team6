import React from "react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Première partie */}
      <div className="background-image">
        <div className="info_home1">
          <h1 className="h1_home">Lorem, ipsum.</h1>
          <p className="para1_home">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, quo
          </p>

          {/* Boutons */}
          <div className="button1_home">
            <button>Webshop</button>
            <button>Abonnement</button>
          </div>

          <div className="fleche_bas">
            <a href="#service">
              <img
                src="../images/down-arrow-alt.svg"
                alt="Fleche vers le bas"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="h2_home">
        <h2>Nos services</h2>
      </div>

      <div className="service" id="service">
        <div className="images_services">
          <a href="#">
            <img src="../images/images_boutique.png" alt="" />
            <span>Boutique</span>
          </a>
          <a href="#">
            <img src="../images/images_mariage.svg" alt="" />
            <span>Mariage</span>
          </a>
          <a href="#">
            <img src="../images/images_enterrement.svg" alt="" />
            <span>Enterrement</span>
          </a>
          <a href="#">
            <img src="../images/images_entreprise.svg" alt="" />
            <span>Entreprise</span>
          </a>
          <a href="#">
            <img src="../images/images_portfolio.svg" alt="" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      <div className="h2_home">
        <h2>Nos bouquets</h2>
      </div>
      <div className="para_bouquets">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="bouquets">
        <div className="images_bouquets">
          <a href="#">
            <img src="../images/images_bouquets1.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="#">
            <img src="../images/images_bouquets2.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="#">
            <img src="../images/images_bouquets3.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
          <a href="#">
            <img src="../images/images_bouquets4.png" alt="" />
            <span>produit</span>
            <span>Variant</span>
            <span>55€</span>
          </a>
        </div>
      </div>

      {/* Partie evenements */}
      <div className="h2_home">
        <h2>Événements</h2>
      </div>
      <div className="para_evenement">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </div>

      <div className="evenement">
        <div className="images_evenement">
          <a href="#">
            <img src="../images/images_evenement1.png" alt="" />
            <h3>Mariage</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <button>En savoir plus</button>
          </a>
          <a href="#">
            <img src="../images/images_evenement2.png" alt="" />
            <h3>Entreprise</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <button>En savoir plus</button>
          </a>
          <a href="#">
            <img src="../images/images_evenement3.png" alt="" />
            <h3>Funérailles</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <button>En savoir plus</button>
          </a>
        </div>
      </div>

      {/* Partie propos homepage */}

      {/* <div className="h2_home">
        <h2>À Propos</h2>
      </div> */}

      <div className="propos_home1">
        <div className="propos_info1">
          <h2>À Propos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
          <button>Contactez-nous</button>
        </div>
        <div className="propos_info2">
          <img src="../images/images_propos_home.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
