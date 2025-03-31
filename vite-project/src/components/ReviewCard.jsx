import React from "react";

function ReviewCard({name, picture, place, review, stars, width}) {
  return (
    <div
  className={`rounded-[12px] bg-white p-[61px_30px] ml-[21px] mb-[36px]`}
    style={{width:`calc(100%*${width})`, 
    boxShadow: "0px 8px 36px rgba(0,0,0,0.25)"
    }}
>
  <div className="flex flex-row">
    <img
      src={picture}
      alt=""
      className="rounded-full h-[95px] w-[95px]"
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
      <a className="text-[28px] text-black p-0 font-[Poppins]">{name}</a>
      <a className="text-[20px] font-[Poppins] text-[#666666] p-0">{place}</a>
    </div>
  </div>

  <div className="mt-[15px]">
    <a className="font-[Poppins] leading-[30px] font-medium text-[20px]">
      <b className="text-[30px]">“</b>{review}<b className="text-[30px]">”</b>
    </a>
  </div>
</div>

  );
}

export default ReviewCard;
