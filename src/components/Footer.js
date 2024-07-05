import React from "react";

import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

// import images
import Logo from "../assets/img/logo.png";

// import data
import { navData } from "../data";

const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <img src={Logo} alt="" />
          </div>
          {/* link group */}
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            {/* link group */}
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Liens Rapides</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <Link
                    className="hover:text-blue transition cursor-pointer"
                    to="top"
                    smooth={true}
                    duration={500}
                  >
                    Accueil
                  </Link>
                </li>
                {navData.map((item, index) => {
                  return (
                    <li className="hover:text-blue transition" key={index}>
                      <Link
                        to={item.href.substring(1)}
                        smooth={true}
                        duration={700}
                        className="cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* link group */}
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Liens Ressources</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <NavLink
                    to="/formation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-blue transition"
                  >
                    Notre Formation
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-blue transition" href="#">
                    Prendre Rendez-Vous
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-blue transition" href="#">
                    Mentions Légales
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* copy & social */}
      <div className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* copy text */}
          <div>
            &copy; 2024 Paca Pare-Brise. Tous droits Réservés. Site crée par
            EnzoCo.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
