import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-red-500/40 text-white py-2 px-4 text-center mt-40 lg:mt-20 mb-6"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <p className="font-bold uppercase lg:tracking-widest	">
        Offre limitée -50% sur la formation avec le code "parebrise50" !
      </p>
    </div>
  );
};

export default Banner;
