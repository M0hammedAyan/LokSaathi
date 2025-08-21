import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // make sure your logo is saved as logo.png

function Navbar() {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
