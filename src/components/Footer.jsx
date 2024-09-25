import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full space-x-2">
      <Link
        to="/about"
        className="text-ct-white-f6f7f9 hover:underline px-5 text-xl"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-ct-white-f6f7f9 hover:underline px-5 text-xl"
      >
        Contact
      </Link>
    </div>
  );
}

export default Footer;
