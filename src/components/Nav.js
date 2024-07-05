import React from "react";

// import data
import { navData } from "../data";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-8">
        {navData.map((item, index) => {
          return (
            <li
              className="border-b-2 border-transparent hover:border-blue transition-all duration-300"
              key={index}
            >
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
    </nav>
  );
};

export default Nav;
