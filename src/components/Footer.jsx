import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full space-x-2 flex align-center  text-ct-191819 bg-ct-F2F7F2 py-2 dark:text-ct-F2F7F2 dark:bg-ct-222824">
      <div className="flex-1">
        <Link
          to="/about"
          className="hover:underline px-5 py-2 text-xl  font-medium "
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:underline px-5 py-2 text-xl  font-medium"
        >
          Contact
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <span className="mr-2">Follow us on:</span>

        <Link to="#" className="hover:underline px-2">
          <FaFacebookSquare size={24} />
        </Link>
        <Link to="#" className="hover:underline px-2">
          <FaTwitterSquare size={24} />
        </Link>
        <Link to="#" className="hover:underline px-2">
          <FaInstagramSquare size={24} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
