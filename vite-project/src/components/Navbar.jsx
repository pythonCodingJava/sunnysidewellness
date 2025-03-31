import React from "react";
import { navelem } from "../styles/stylecomponents";

function Navbar() {
  return (
    <div className="mt-2 w-[100%] h-16 flex flex-row items-center">
    <div>
      <img src="logo.png" className="h-16 mr-auto" alt="Logo" />
    </div>
    <a className={`${navelem} ml-auto`}>Home</a>
    <a className={`${navelem}`}>About us</a>
    <a className={`${navelem}`}>Our services</a>
    <a className={`${navelem}`}>For patients</a>
    <a className={`${navelem}`}>Testimonials</a>
    <a className={`${navelem}`}>Blogs</a>
  </div>

  );
}

export default Navbar;
