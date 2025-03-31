import React from "react";
import { navelem } from "../styles/stylecomponents";

function Navbar({matches}) {
  
  return (
    <div className="mt-2 w-[100%] h-16 flex flex-row items-center">
    <div>
      <img src="logo.png" className="h-16 mr-auto" alt="Logo" />
    </div>
    <a className={`${navelem} ${matches?"":"text-[1.7vw]"} ml-auto`}>Home</a>
    <a className={`${navelem} ${matches?"":"text-[1.7vw]"}`}>About us</a>
    <a className={`${navelem} ${matches?"":"text-[1.7vw]"}`}>Our services</a>
    <a className={`${navelem} ${matches?"":"text-[1.7vw]"}`}>For patients</a>
    <a className={`${navelem} ${matches?"":"text-[1.7vw]"}`}>Testimonials</a>
    <a className={`${navelem} ${matches?"":"text-[1.7vw]"}`}>Blogs</a>
  </div>

  );
}

export default Navbar;
