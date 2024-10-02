import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full space-x-2 flex align-center  text-ct-191819 bg-ct-F2F7F2 py-2 dark:text-ct-F2F7F2 dark:bg-ct-222824">
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
  );
}

export default Footer;
