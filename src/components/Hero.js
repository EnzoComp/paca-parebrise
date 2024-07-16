import React, { useState } from "react";

// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";
import { MdPlace } from "react-icons/md";

// import banner
import Banner from "./Banner";

// Modal Component
const Modal = ({ showModal, setShowModal }) => {
  const [step, setStep] = useState(1);
  const [Remplacement, setRemplacement] = useState("");
  const [Modèle, setModèle] = useState("");
  const [formData, setFormData] = useState({
    Prénom: "",
    Nom: "",
    Téléphone: "",
    email: "",
    Adresse: "",
    Assurance: "",
    NumAssurance: "",
  });

  function handleOptionSelect(option) {
    setRemplacement(option);
    setStep(2);
  }

  const handleBack = () => {
    setStep(step - 1);
    if (step === 2) {
      setRemplacement("");
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      Remplacement,
      Modèle,
      ...formData,
    };

    try {
      const response = await fetch("https://formspree.io/f/manwnpkk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setShowModal(false);
        // Réinitialisation des données du formulaire si nécessaire
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Gérer les erreurs d'envoi ici
    }
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            {step === 1 && (
              <>
                <h2 className="text-2xl mb-4 text-blue uppercase font-bold">
                  Sélectionnez une option
                </h2>
                <div className="flex flex-col gap-y-4 items-center">
                  <button
                    className={`btn-module ${
                      Remplacement === "Pare-brise"
                        ? "bg-blue text-white"
                        : "bg-white text-darkblue"
                    }`}
                    onClick={() => handleOptionSelect("Pare-brise")}
                  >
                    Pare-brise
                  </button>
                  <button
                    className={`btn-module ${
                      Remplacement === "Lunette arrière"
                        ? "bg-blue text-white"
                        : "bg-white text-darkblue"
                    }`}
                    onClick={() => handleOptionSelect("Lunette arrière")}
                  >
                    Lunette arrière
                  </button>
                  <button
                    className={`btn-module ${
                      Remplacement === "Vitres latérales"
                        ? "bg-darkblue text-white"
                        : "bg-white text-darkblue"
                    }`}
                    onClick={() => handleOptionSelect("Vitres latérales")}
                  >
                    Vitres latérales
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-2xl mb-4 text-blue uppercase font-bold">
                  Option sélectionnée : {Remplacement}
                </h2>
                <label className="block mb-2 text-2xl text-blue font-bold">
                  Modèle de véhicule :
                </label>
                <input
                  type="text"
                  value={Modèle}
                  onChange={(e) => setModèle(e.target.value)}
                  className="input mb-4"
                  placeholder="Entrez le modèle de votre véhicule"
                />
                <div className="flex justify-between">
                  <button
                    className="btn bg-darkblue text-white px-4 py-2 rounded"
                    onClick={handleBack}
                  >
                    Retour
                  </button>
                  <button
                    className="btn bg-darkblue text-white px-4 py-2 rounded"
                    onClick={handleNext}
                    disabled={!Modèle}
                  >
                    Suivant
                  </button>
                </div>
              </>
            )}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="w-[400px]">
                <h2 className="text-2xl mb-4 text-blue uppercase font-bold">
                  Vos informations
                </h2>
                <label className="block mb-2 text-lg text-darkblue">
                  Prénom :
                </label>
                <input
                  type="text"
                  name="Prénom"
                  value={formData.Prénom}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="Entrez votre prénom"
                  required
                />
                <label className="block mb-2 text-lg text-darkblue">
                  Nom :
                </label>
                <input
                  type="text"
                  name="Nom"
                  value={formData.Nom}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="Entrez votre nom"
                  required
                />
                <label className="block mb-2 text-lg text-darkblue">
                  Numéro de Téléphone :
                </label>
                <input
                  type="tel"
                  name="Téléphone"
                  value={formData.Téléphone}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="Entrez votre numéro de Téléphone"
                  required
                />
                <label className="block mb-2 text-lg text-darkblue">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="Entrez votre email"
                  required
                />
                <label className="block mb-2 text-lg text-darkblue">
                  Adresse et code postal :
                </label>
                <input
                  type="text"
                  name="Adresse"
                  value={formData.Adresse}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="Indiquez votre adresse"
                  required
                />
                <label className="block text-darkblue">Nom d'assurance :</label>
                <input
                  type="text"
                  name="Assurance"
                  value={formData.Assurance}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="Entrez votre assurance"
                  required
                />
                <label className="block text-darkblue">
                  Votre numéro de contrat d'assurance :
                </label>
                <input
                  type="text"
                  name="NumAssurance"
                  value={formData.NumAssurance}
                  onChange={handleChange}
                  className="input mb-4"
                  placeholder="numéro de contrat d'assurance"
                  required
                />
                <div className="flex justify-between">
                  <button
                    className="btn bg-darkblue text-white px-4 py-2 rounded"
                    onClick={handleBack}
                    type="button"
                  >
                    Retour
                  </button>
                  <button
                    className="btn bg-darkblue text-white px-4 py-2 rounded"
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            )}
            <button
              className="mt-4 text-[20px] bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded self-center"
              onClick={() => setShowModal(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Banner />
      <section id="header" className="hero-section flex mt-16">
        {/* Ajout de la marge supérieure */}
        <div className="container mx-auto mt-4">
          <div className="flex flex-col items-center lg:flex-row">
            {/* hero text */}
            <div className="flex-1">
              {/* badge text */}
              <div
                className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[500px]"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-between text-sm lg:text-base text-center">
                  <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
                    100€ OFFERTS
                  </div>
                  <div className="text-base pr-6">
                    Pour tout remplacement de pare-brise
                  </div>
                </div>
              </div>

              {/* title */}
              <div
                className="flex justify-center lg:justify-start text-[18px] lg:text-[25px]"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                <MdPlace className=" mr-1 mt-1 text-red/70" />
                <p className="max-w-[440px] ">Toulon et ses alentours</p>
              </div>

              <h1
                className="text-[32px] lg:text-[69px] font-bold leading-tight mb-6 text-center lg:text-left"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                REMPLACEMENT DE PARE-BRISE À DOMICILE
              </h1>
              <p
                className="max-w-[440px] leading-relaxed mb-8 lg:text-[20px] text-center lg:text-left"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                PACA PARE-BRISE vous propose le déplacement à domicile, sur
                votre lieu de travail ou ailleurs !
              </p>
              <div className="hidden lg:flex">
                <button
                  className="btn gap-x-4 pl-6 text-sm h-12 lg:h-14 lg:text-base mr-8"
                  data-aos="fade-down"
                  data-aos-delay="700"
                  onClick={() => setShowModal(true)}
                >
                  Prenez rendez-vous
                  <IoIosArrowDroprightCircle className="hidden lg:flex text-2xl lg:text-3xl" />
                </button>
                <button
                  className="btn gap-x-4 pl-6 text-sm h-12 lg:h-14 lg:text-base"
                  data-aos="fade-down"
                  data-aos-delay="700"
                >
                  <a href="tel:0764013118">07 64 01 31 18</a>
                  <IoIosArrowDroprightCircle className="hidden lg:flex text-2xl lg:text-3xl" />
                </button>
              </div>
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Hero;
