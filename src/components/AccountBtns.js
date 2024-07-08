import React from "react";
import { Link } from "react-router-dom";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* link btn */}
      <Link to="/formation" className="btn transition h-[40px] text-base">
        Notre Formation
      </Link>
    </div>
  );
};

export default AccountBtns;
