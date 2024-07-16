import React, { useState } from "react";

import { Link } from "react-scroll";

// import components
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

// import icons
import { CgMenuRight } from "react-icons/cg";

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
        <div className="inset-0 flex items-center justify-center z-50 absolute top-[360px]">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-5 rounded-lg z-10">
            {step === 1 && (
              <>
                <h2 className="text-[20px] mb-3 text-blue uppercase font-bold">
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
                <h2 className="text-[20px] mb-4 text-blue uppercase font-bold">
                  Option sélectionnée : {Remplacement}
                </h2>
                <label className="block mb-2 text-[19px] text-blue font-bold">
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
              <form onSubmit={handleSubmit} className="w-[250px]">
                <h2 className="text-[20px] mb-2 text-blue uppercase font-bold">
                  Vos informations
                </h2>
                <label className="block text-darkblue">Prénom :</label>
                <input
                  type="text"
                  name="Prénom"
                  value={formData.Prénom}
                  onChange={handleChange}
                  className="input mb-4 text-[15px]"
                  placeholder="Entrez votre prénom"
                  required
                />
                <label className="block text-darkblue">Nom :</label>
                <input
                  type="text"
                  name="Nom"
                  value={formData.Nom}
                  onChange={handleChange}
                  className="input mb-4 text-[15px]"
                  placeholder="Entrez votre nom"
                  required
                />
                <label className="block text-darkblue">
                  Numéro de Téléphone :
                </label>
                <input
                  type="tel"
                  name="Téléphone"
                  value={formData.Téléphone}
                  onChange={handleChange}
                  className="input mb-4 text-[15px]"
                  placeholder="Entrez votre numéro de Téléphone"
                  required
                />
                <label className="block text-darkblue">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input mb-4 text-[15px]"
                  placeholder="Entrez votre email"
                  required
                />
                <label className="block text-darkblue">
                  Adresse et code postal :
                </label>
                <input
                  type="text"
                  name="Adresse"
                  value={formData.Adresse}
                  onChange={handleChange}
                  className="input mb-4 text-[15px]"
                  placeholder="Indiquez votre adresse"
                  required
                />
                <label className="block text-darkblue">Nom d'assurance :</label>
                <input
                  type="text"
                  name="Assurance"
                  value={formData.Assurance}
                  onChange={handleChange}
                  className="input mb-4 text-[15px]"
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
                  className="input mb-4 text-[15px]"
                  placeholder="numéro de contrat d'assurance"
                  required
                />
                <div className="flex justify-between">
                  <button
                    className="bg-darkblue text-white px-4 py-2 rounded"
                    onClick={handleBack}
                    type="button"
                  >
                    Retour
                  </button>
                  <button
                    className=" bg-darkblue text-white px-4 py-2 rounded"
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            )}
            <button
              className="mt-4 text-[18px] bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded self-center"
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

const Header = ({ setNavMobile }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header
      className="fixed top-0 w-full z-10 py-[5px] lg:pt-[15px] bg-darkblue/90"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link to="top" smooth={true} duration={500} className="cursor-pointer">
          <img src={Logo} alt="Logo PACA Pare-Brise" />
        </Link>
        {/* nav & btns */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        {/* open nav btn */}
        <div
          onClick={() => setNavMobile(true)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-3xl" />
        </div>
      </div>
      <div className="lg:hidden py-2 px-4 mt-4 flex space-x-4">
        <button
          className="btn w-full max-w-xs text-sm h-12 justify-center"
          data-aos="fade-down"
          data-aos-delay="700"
          onClick={() => setShowModal(true)}
        >
          Prenez rendez-vous
        </button>
        <button
          className="btn w-full max-w-xs text-sm h-12 justify-center"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <a href="tel:0764013118">07 64 01 31 18</a>
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
};

export default Header;
