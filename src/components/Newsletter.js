import React from "react";

// import components
import NewsletterForm from "../components/NewsletterForm";

// import icons
import { IoMdMail } from "react-icons/io";
import {
  FaPhone,
  FaFacebook,
  FaInstagramSquare,
  FaSnapchat,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-[40px] lg:py-[88px] bg-newsletter" id="contact">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center justify-between bg-blue p-12 rounded-2xl lg:h-[400px]"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          {/* text */}
          <div className="flex-1 w-full">
            <h3 className="h3 mb-4">Contactez-nous dès maintenant</h3>
            <p className="max-w-[348px] mb-8">
              Que vous soyez un particulier ayant besoin de remplacer votre
              pare-brise ou un entrepreneur souhaitant se former dans ce secteur
              lucratif, PACA Pare-Brise est là pour vous. Contactez-nous dès
              aujourd'hui pour découvrir comment nous pouvons vous aider où
              explorez notre site pour en savoir plus sur nos services et notre
              formation.
            </p>
            <div className="flex-col font-bold mb-5 lg:mb-0">
              <a
                className="flex items-center text-[17px] lg:text-[19px] hover:text-darkblue/70 hover:text-[19.5px] transition-all duration-300"
                href="mailto: rayandhouibi8355@gmail.com"
              >
                <div>
                  <IoMdMail className="mr-2" />
                </div>
                Ecriver nous par mail : rayandhouibi8355@gmail.com
              </a>
              <a
                className="flex items-center text-[17px] lg:text-[19px] max-w-[260px] hover:text-darkblue/70 hover:text-[19.5px] transition-all duration-300 mt-3"
                href="tel:0764013118"
              >
                <FaPhone className="mr-2" />
                Nous appeler maintenant
              </a>
            </div>
          </div>
          <NewsletterForm />
          <div className="text-right font-bold text-[30px] text-white absolute bottom-2 lg:right-8">
            <div className="flex">
              <a
                href="https://www.facebook.com/profile.php?id=61557584777709&paipv=0&eav=AfaUvwPri9OP1R3Je2cAuyfDOeoVu9pKDaIuUqRn8h-1K1jghKk9WMi0_2vhnR_W5Eo"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/paca_parebrise83/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.snapchat.com/add/pacaparebrise?share_id=8VBb1pqCNV8&locale=fr-FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
