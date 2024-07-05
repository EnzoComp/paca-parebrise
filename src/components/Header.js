import React from "react";

import { Link } from "react-scroll";

// import components
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

// import icons
import { CgMenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
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
    </header>
  );
};

export default Header;
