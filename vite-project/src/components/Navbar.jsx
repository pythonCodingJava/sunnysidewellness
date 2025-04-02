import React from "react";
import { navelem } from "../styles/stylecomponents";

function Navbar({ matches, tablet, mobile }) {
  return (
    <div
      className={`mt-${!mobile?"[0px]":"2"} w-[100%] ${!mobile?`h-[7.1vw]`:`${tablet ? "h-16" : "h-[51.29px]"}`} flex flex-row items-center`}
    >
      <div>
        <img
          src="logo.png"
          className={`${!mobile?"h-[6.9vw]":`${tablet ? "h-16" : "h-[51.29px]"}`} mr-auto`}
          alt="Logo"
        />
      </div>
      {!mobile ? (
        <>
          <div className="ml-auto h-[100%] cursor-pointer">
            <img src="image.png" className="h-[100%]" alt="" />
          </div>
        </>
      ) : (
        <>
          {!tablet ? (
            <div className="ml-auto h-[100%] cursor-pointer">
              <img src="icon.png" className="h-[100%]" alt="" />
            </div>
          ) : (
            <>
              <a
                className={`${navelem} ${
                  matches ? "text-[22px]" : "text-[1.56vw]"
                } ml-auto`}
              >
                Home
              </a>
              <a
                className={`${navelem} ${
                  matches ? "text-[22px]" : "text-[1.56vw]"
                }`}
              >
                About us
              </a>
              <a
                className={`${navelem} ${
                  matches ? "text-[22px]" : "text-[1.56vw]"
                }`}
              >
                Our services
              </a>
              <a
                className={`${navelem} ${
                  matches ? "text-[22px]" : "text-[1.56vw]"
                }`}
              >
                For patients
              </a>
              <a
                className={`${navelem} ${
                  matches ? "text-[22px]" : "text-[1.56vw]"
                }`}
              >
                Testimonials
              </a>
              <a
                className={`${navelem} ${
                  matches ? "text-[22px]" : "text-[1.56vw]"
                }`}
              >
                Blogs
              </a>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Navbar;
