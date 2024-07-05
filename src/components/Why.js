import React from "react";

import { Link } from "react-scroll";

// import images
import Image from "../assets/img/why-img.png";

const Why = () => {
  return (
    <section className="section" id="why">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-8 lg:flex-row">
          {/* image */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={Image} alt="" />
          </div>
          {/* text */}
          <div
            className="order-1 lg:order-2 max-w-[600px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="section-title">Qui sommes-nous?</h2>
            <p className="section-subtitle">
              Bienvenue chez PACA Pare-Brise, Votre expert en vitrage automobile
              dans la région PACA. <br />
              Chez PACA Pare-Brise, nous sommes passionnés par le vitrage
              automobile et dédiés à offrir des services de qualité supérieure à
              nos clients. Avec plus de 10 ans d'expérience, nous avons établi
              une solide réputation en tant que leaders dans le remplacement de
              pare-brise dans la région Provence-Alpes-Côte d'Azur. Notre
              engagement est de fournir des solutions rapides, fiables et
              économiques pour tous vos besoins en vitrage automobile.
            </p>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn px-6">Nous contacter</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
