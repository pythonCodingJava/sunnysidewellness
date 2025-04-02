import React, { useEffect, useState } from "react";

function ReviewCard({
  name,
  picture,
  place,
  review,
  stars,
  width,
  matches,
  mobile,
  tablet,
}) {
  return (
    <div
      className={`bg-white ml-[1vw] ${
        mobile ? "p-[5.4vw_2.5vw] mb-[2.5vw]" : "p-[3.1vw_1.5vw] mb-[1.8vw]"
      }`}
      style={{
        width: `calc(100%*${width})`,
        boxShadow: `0px 8px 36px rgba(0,0,0,${mobile ? "0" : "0.25"})`,
        border: "0.12px solid rgba(0, 0, 0, 0.2)",
        borderRadius: `${mobile ? "24px" : "12px"}`,
      }}
    >
      <div className="flex flex-row">
        <img
          src={picture}
          alt=""
          className={`rounded-full ${
            mobile ? "h-[16vw] w-[16vw]" : "h-[6.5vw] w-[6.5vw]"
          }`}
        />

        <div className="flex flex-col ml-[15px]">
          <div className="flex flex-row">
            {[...Array(stars).keys()].map((item, index) => (
              <img
                src="star.png"
                key={index}
                className={`ml-[1.6px] ${mobile?"h-[2.5vw]":"h-[15px]"}`}
                alt=""
              />
            ))}
          </div>
          
          <a
            className={`text-black p-0 mt-auto font-[Poppins] font-medium ${
              mobile
                ? `text-[4vw]`
                : `${matches ? "text-[1.5vw]" : "text-[20px]"}`
            }`}
          >
            {name}
          </a>

          <a
            className={`font-[Poppins] mt-auto text-[#666666] p-0 ${
              mobile
                ? "text-[3vw]"
                : `${matches ? "text-[1vw]" : "text-[19px]"}`
            }`}
          >
            {place}
          </a>
        </div>
      </div>

      <div className="mt-[15px] max-h-[255px] overflow-hidden text-ellipsis">
        <div
          className={`font-[Poppins] font-medium ${
            mobile ? "text-[2vw]" : `${matches ? "text-[1vw]" : "text-[19px]"}`
          }`}
        >
          <b className={`text-[${matches ? "1.5vw" : "28px"}]`}>“</b>
          {review}
          <b className={`text-[${matches ? "1.5vw" : "28px"}]`}>”</b>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
