import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="h-auto p-4 shadow-lg">
      {/* Logo */}
      <div className="flex justify-between items-center mx-10">
        <div>
          <img src={logo} alt="" className="h-20 w-20" />
        </div>
        <div>
          <ul className="flex space-x-3">
            <li>
              <Link to="dashboard">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="login" className="bg-orange-500/80 rounded-xl text-white py-5 px-3">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
