import React from "react";

// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

// import banner
import Banner from "../components/Banner";

const Hero = () => {
  return (
    <>
      <Banner />
      <section id="header" className="hero-section flex mt-16">
        {/* Ajout de la marge supérieure */}
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:flex-row">
            {/* hero text */}
            <div className="flex-1">
              {/* badge text */}
              <div
                className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[500px]"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-between text-sm lg:text-base">
                  <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
                    100€ OFFERTS
                  </div>
                  <div className="text-base pr-6">
                    Pour tout remplacement de pare-brise
                  </div>
                </div>
              </div>

              {/* title */}
              <h1
                className="text-[32px] lg:text-[69px] font-bold leading-tight mb-6"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                REMPLACEMENT DE PARE-BRISE À DOMICILE
              </h1>
              <p
                className="max-w-[440px] leading-relaxed mb-8 lg:text-[20px]"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                PACA PARE-BRISE vous propose le déplacement à domicile, sur
                votre lieu de travail ou ailleurs !
              </p>
              <button
                className="btn gap-x-4 pl-6 text-sm h-12 lg:h-14 lg:text-base"
                data-aos="fade-down"
                data-aos-delay="700"
              >
                Prendre rendez-vous
                <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
              </button>
            </div>
          </div>

          <div
            className="hidden lg:flex flex flex-col gap-y-6 lg:flex-row lg:justify-between pt-[150px]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* item */}
            <div className="flex items-center gap-x-6">
              {/* item icon */}
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
                <HiChartBar />
              </div>
              {/* item text */}
              <div>
                <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                  +200
                </div>
                <div className="text-gray">Pare-brise changé</div>
              </div>
            </div>

            <div className="flex items-center gap-x-6">
              {/* item icon */}
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
                <HiUser />
              </div>
              {/* item text */}
              <div>
                <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                  10 ans
                </div>
                <div className="text-gray">D'expérience</div>
              </div>
            </div>

            <div className="flex items-center gap-x-6">
              {/* item icon */}
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
                <HiGlobe />
              </div>
              {/* item text */}
              <div>
                <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                  Région PACA
                </div>
                <div className="text-gray">
                  De Aubagne (13) à St Tropez (83)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
