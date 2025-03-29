import React from "react";

function Navbar() {
  return (
    <div
      style={{
        marginTop: "10px",
        width: "99.8%",
        height: "68px",
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        // border:"2px solid black"
      }}
    >
      <div>
        <img
          src="logo.png"
          style={{
            height: "68px",
            // marginLeft: "68px",
            marginRight: "auto",
          }}
          alt=""
        />
      </div>
        <a style={{marginLeft:"auto"} } className="navelem">Home</a>
        <a className="navelem">About us</a>
        <a className="navelem">Our services</a>
        <a className="navelem">For patients</a>
        <a className="navelem">Testimonials</a>
        <a className="navelem">Blogs</a>
    </div>
  );
}

export default Navbar;
