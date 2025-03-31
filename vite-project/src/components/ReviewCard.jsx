import React, { useEffect, useState } from "react";

function ReviewCard({name, picture, place, review, stars, width, matches}) {
  return (
    <div
  className={`rounded-[12px] bg-white p-[3.1vw_1.5vw] ml-[1vw] mb-[1.8vw]`}
    style={{width:`calc(100%*${width})`, 
    boxShadow: "0px 8px 36px rgba(0,0,0,0.25)"
    }}
>
  <div className="flex flex-row">
    <img
      src={picture}
      alt=""
      className="rounded-full h-[6.5vw] w-[6.5vw]"
    />

    <div className="flex flex-col ml-[15px]">
      <div className="flex flex-row">
        {[...Array(stars).keys()].map((item, index) => (
          <img
            src="star.png"
            key={index}
            className="h-[15px] ml-[1.6px]"
            alt=""
          />
        ))}
      </div>
      <a className={`text-[${matches?"1.4vw":"20px"}] text-black p-0 font-[Poppins]`}>{name}</a>
      <a className={`text-[${matches?"1vw":"19px"}] font-[Poppins] text-[#666666] p-0`}>{place}</a>
    </div>
  </div>

  <div className="mt-[15px]">
    <a className={`font-[Poppins] leading-[1.5vw] font-medium text-[${matches?"1.vw":"19px"}]`}>
      <b className={`text-[${matches?"1.5vw":"28px"}]`}>“</b>{review}<b className={`text-[${matches?"1.5vw":"28px"}]`}>”</b>
    </a>
  </div>
</div>

  );
}

export default ReviewCard;
