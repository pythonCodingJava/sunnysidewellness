import React from "react";

function Footer() {
  return (
    <div className="w-full rounded-[4px_24px_4px_24px] bg-gradient-to-r from-[#53683F] via-[#53683F] to-[#546940] flex flex-row mt-[114px] h-[411px] " >
      <div className="m-[65px_70px] flex flex-col font-['Libre_Baskerville'] text-[54px] font-bold w-[41.52vw]">
        <a className="text-white">
          Align Your <span className="text-[var(--golden-yellow)]">Health</span>
          ,
        </a>
        <a className="text-white">Transform Your Life,</a>
        <a className="mt-[24px] font-['Inter'] text-[24px] font-normal text-[#CACACA]">
          Experience relief, restore movement, and embrace a healthier life
          today.
        </a>

        <div className="rounded-[12px] w-[254px] h-[56px] font-['Poppins'] text-[24px] bg-[var(--golden-yellow)] text-center text-[var(--olive-green)] flex justify-center items-center shadow-[0px_0px_15px_rgba(30,30,30,0.16)] mt-[24px]">
          <a>Contact Us</a>
        </div>
      </div>

      <div className="relative m-0 w-[605px] h-[411px]">
        <img
          src="image.png"
          className="w-[605px] absolute bottom-[0px]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
