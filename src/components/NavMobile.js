import React from "react";

import { Link } from "react-router-dom";

// import data
import { navData } from "../data";

//import icons
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center">
      {/* close btn */}
      <div
        onClick={() => setNavMobile(false)}
        className="absolute top-2 left-2 cursor-pointer"
      >
        <CgClose className="text-3xl" />
      </div>
      {/* menu list */}
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
        <div className="items-center font-medium pt-10">
          {/* link btn */}
          <Link to="/formation" className="btn transition h-[50px] text-base">
            Notre Formation
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavMobile;
