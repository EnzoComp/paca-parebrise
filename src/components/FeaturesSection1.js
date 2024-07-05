import React from "react";

import { Link } from "react-scroll";

// import image
import Image1 from "../assets/img/feature-1-img.png";

const FeaturesSection1 = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">Remplacement de pare-brise</h3>
          <p className="text-gray mb-8">
            Installation professionnelle de pare-brise de haute qualité pour une
            large gamme de véhicules, allant des voitures particulières aux
            camions, en passant par les véhicules utilitaires et les véhicules
            de luxe.
          </p>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn px-8">Nous Contacter</button>
          </Link>
        </div>
        {/* image */}
        <div
          className="flex-1 flex justify-end"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img src={Image1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
