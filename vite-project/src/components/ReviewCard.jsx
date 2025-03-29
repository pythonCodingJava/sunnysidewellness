import React from "react";

function ReviewCard({name, place, review, stars, width}) {
  return (
    <div
      style={{
        width: `calc(100%*${width})`,
        borderRadius: "12px",
        border: "0.12px solild black",
        backgroundColor:"white",
        boxShadow: "0px 8px 36px rgba(0,0,0,0.25)",
        // height:"383px",
        padding: "61px 30px",
        marginLeft:"21px",
        marginBottom:"36px"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src="dummy.png"
          alt=""
          style={{ borderRadius: "100%", height: "95px", width: "95px" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
          }}
        >
          <div style={{}}>
            {[...Array(stars).keys()].map((item,index)=>{return (<img
              src="star.png"
              key={index}
              style={{ height: "15px", marginLeft: "1.6px" }}
              alt=""
            />)})}
           
          </div>
          <a
            style={{
              fontSize: "28px",
              color: "black",
              padding: "0px",
              fontFamily: "Poppins",
            }}
          >
            {name}
          </a>
          <a
            style={{
              padding: "0px",
              fontSize: "20px",
              fontFamily: "Poppins",
              color: "#666666",
            }}
          >
            {place}
          </a>
        </div>
      </div>
      <div style={{marginTop:"15px"}}> 
      <a
        style={{ fontFamily: "poppins", lineHeight:"30px", fontWeight: "500", fontSize:"20px" }}
      >
        <b style={{fontSize:"30px"}}>“</b>{review}<b style={{fontSize:"30px"}}>”</b>
      </a>
      </div>
    </div>
  );
}

export default ReviewCard;
