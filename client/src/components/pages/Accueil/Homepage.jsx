import React from "react";
import Avis from "../../Widgets/Avis/Avis";
import CarteProduit from "../../Widgets/CarteProduit/CarteP";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Première partie */}
      <div className="background-image">
        <div className="info_home1">
          <h1 className="h1_home">Les mains florales</h1>
          <p className="para1_home">
            Des bouquets uniques, une expérience florale sur-mesure.
          </p>

          {/* Boutons */}
          <div className="button1_home">
            <button>
              <a href="/Abonnement">Abonnements</a>
            </button>
            <button>
              <a href="/Bouquets">Boutique</a>
            </button>
          </div>
        </div>
      </div>

      <div className="h2_home">
        <h2>Nos services</h2>
      </div>

      <div className="service" id="service">
        <div className="images_services">
          <a href="/Bouquets">
            <img src="../images/images_boutique.png" alt="" />
            <span>Boutique</span>
          </a>
          <a href="/Mariage">
            <img src="../images/images_mariage.svg" alt="" />
            <span>Mariage</span>
          </a>
          <a href="/Enterrement">
            <img src="../images/images_enterrement.svg" alt="" />
            <span>Enterrement</span>
          </a>
          <a href="/Entreprise">
            <img src="../images/images_entreprise.svg" alt="" />
            <span>Entreprise</span>
          </a>
          <a href="/Portfolio">
            <img src="../images/images_portfolio.svg" alt="" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      <div className="h2_home">
        <h2>Nos bouquets</h2>
      </div>
      <div className="para_bouquets">
        Chaque bouquet est une création unique, pensée pour sublimer vos espaces
        et vos moments spéciaux.
      </div>

      {/* Cartes bouquets */}
      <div className="bouquets">
        <CarteProduit />
      </div>

      {/* Partie événements */}
      <div className="h2_home">
        <h2>Événements</h2>
      </div>
      <div className="para_evenement">
        Parce que chaque moment de la vie mérite une touche florale unique, nous
        vous accompagnons dans tous vos événements.
      </div>

      <div className="evenement">
        <div className="images_evenement">
          <a href="/Mariage">
            <img src="../images/images_evenement1.png" alt="" />
            <h3>Mariages</h3>
            <span>
              Des bouquets et décors floraux conçus sur-mesure pour un jour
              inoubliable.
            </span>
            <button>En savoir plus</button>
          </a>
          <a href="/Entreprise">
            <img src="../images/images_evenement2.png" alt="" />
            <h3>Entreprises</h3>
            <span>
              Offrez à vos événements professionnels une ambiance raffinée.
            </span>
            <button>En savoir plus</button>
          </a>
          <a href="/Funeraille">
            <img src="../images/images_evenement3.png" alt="" />
            <h3>Funérailles</h3>
            <span>
              Un hommage délicat et respectueux à travers des compositions
              florales.
            </span>
            <button>En savoir plus</button>
          </a>
        </div>
      </div>

      {/* Partie à propos */}
      <div className="propos_home1">
        <div className="propos_info1">
          <h2>À Propos</h2>
          <p>
            Chez Les mains florales, chaque création est une œuvre unique,
            pensée avec passion et créativité. Inspirés par l’art et les
            tendances, nous composons des bouquets originaux pour sublimer vos
            moments précieux. Basés en Belgique, nous apportons une touche
            florale moderne et personnalisée à chaque intérieur et événement.
          </p>
          <button>
            <a href="/Contact">Contactez-nous</a>
          </button>
        </div>
        <div className="propos_info2">
          <img src="../images/images_propos_home.png" alt="" />
        </div>
      </div>

      {/* Partie avis */}
      <div className="avis_import">
        <Avis />
      </div>
    </div>
  );
};

export default Homepage;
