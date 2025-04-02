import React from "react";

function Footer({mobile}) {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-full rounded-[4px_24px_4px_24px] bg-gradient-to-r from-[#53683F] via-[#53683F] to-[#546940] flex flex-row mt-[5.9vw]">
        <div
          className="m-[65px_70px] flex flex-col font-['Libre_Baskerville'] font-bold w-[50.9vw]"
          style={{ fontSize: "calc(0.0375*100vw)" }}
        >
          <a className="text-white">
            Align Your{" "}
            <span className="text-[var(--golden-yellow)]">Health</span>,
          </a>
          <a className="text-white">Transform Your Life,</a>
          <a
            className="mt-[24px] font-['Inter'] font-normal text-[#CACACA]"
            style={{ fontSize: "1.6vw" }}
          >
            Experience relief, restore movement, and embrace a healthier life
            today.
          </a>

          <div className="rounded-[12px] w-[17.3vw] h-[3.8vw] font-['Poppins'] text-[24px] bg-[var(--golden-yellow)] text-center text-[var(--olive-green)] flex justify-center items-center shadow-[0px_0px_15px_rgba(30,30,30,0.16)] mt-[24px]">
            <a>Contact Us</a>
          </div>
        </div>
      </div>
      {!mobile?<></>:<div className="relative ml-auto m-0 w-[100%]">
        <img
          src="doctor.png"
          style={{ width: "43vw" }}
          className="absolute right-[20px] bottom-[0px]"
          alt=""
        />
      </div>}
    </div>
  );
}

export default Footer;
