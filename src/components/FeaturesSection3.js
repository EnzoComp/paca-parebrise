import React from "react";

// import image
import Image3 from "../assets/img/feature-3-img.png";
import { Link } from "react-router-dom";

const FeaturesSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div
          className="max-w-[454px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">Formation professionnelle</h3>
          <p className="text-gray mb-8 max-w-[408px]">
            Formation complète pour ceux qui souhaitent se lancer dans le métier
            du vitrage automobile. Apprenez à créer votre entreprise, à attirer
            des clients et à maximiser vos profits avec notre programme de
            formation exclusifs.
          </p>
          <Link to="/formation">
            <button className="btn px-8">Notre Formation</button>
          </Link>
        </div>
        {/* image */}
        <div
          className="flex-1 flex justify-end"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img src={Image3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;
