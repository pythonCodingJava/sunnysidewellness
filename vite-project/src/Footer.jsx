import React from "react";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "4px 24px 4px 24px",
        backgroundImage:
          "linear-gradient(to right, #53683F,#53683F,#53683F, #7F9967, #546940 )",
        display:"flex",
        flexDirection:"row",
        marginTop:"114px"
    }}
    >
      <div
        style={{
          margin: "65px 70px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Libre Baskerville",
          fontSize: "54px",
          fontWeight: "bold",
          width: "calc(0.4152*100vw)",
        }}
      >
        <a style={{ color: "white" }}>
          Align Your <span style={{ color: "var(--golden-yellow)" }}>Health</span>,
        </a>
        <a style={{ color: "white" }}>Transform Your Life,</a>
        <a
          style={{
            margin: "24px 0px",
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "400",
            color: "#CACACA",
          }}
        >
          Experience relief, restore movement, and embrace a healthier life
          today.
        </a>
        <div
          style={{
            borderRadius: "12px",
            width: "254px",
            height: "56px",
            fontFamily: "Poppins",
            fontSize: "24px",
            backgroundColor: "var(--golden-yellow)",
            textAlign: "center",
            paddingTop: "auto",
            fontWeight: "400",
            color: "var(--olive-green)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            boxShadow:"0px 0px 15px rgba(30,30,30,0.16)"
          }}
        >
          <a>Contact Us</a>
        </div>

      </div>
      <div style={{height:"411px"}}>    
          <img src="image.png" style={{width:"605px", position:"relative", top:"-77px"}} alt="" />
      </div>
    </div>
  );
}

export default Footer;
