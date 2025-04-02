import React from "react";

function Hero({ mobile }) {
  return (
    <div
      className={`flex flex-col items-center mt-[4.86vw] ${!mobile?"w-[100%]":"w-[56.7vw]"}`}
    >
      <h1
        style={{ fontSize: `${!mobile?"6.1vw":"calc(0.0375 * 100vw)"}` }}
        className="font-['Libre_Baskerville'] font-extrabold text-[var(--olive-green)] m-0"
      >
        Our Wall of <a className="text-[var(--golden-yellow)]">Love</a>
      </h1>
      <p
        style={{
          fontSize: `${!mobile?"3vw":"calc(0.016 * 100vw)"}`,
        }}
        className="font-['Poppins'] text-center font-light mb-0 mt-[2.5vw]"
      >
        Our Wall of Love showcases real stories of healing, relief, and renewed
        mobility from patients who trust us with their care. Let their
        experiences inspire your journey to better health!
      </p>
      <div
        style={{ marginTop: "calc(0.025 * 100vw)" }}
        className="flex flex-row items-center justify-center"
      >
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="star.png"
            style={{
              height: `${!mobile?"4.4vw":"2.3vw"}`,
              marginLeft: index === 0 ? "0px" : "5.23px",
            }}
            alt=""
          />
        ))}
       {!mobile?<></>: <div
          style={{
            width: "calc(0.011 * 100vw)",
            height: "calc(0.023 * 100vw)",
            right: "calc(0.011 * 100vw)",
          }}
          className="bg-white relative"
        />}
        <div className={`ml-[${!mobile?"16px":"0px"}] font-light`}>
        <a
          style={{ fontSize: `${!mobile?"3vw":"calc(0.016 * 100vw)"}` }}
          className={`font-['Poppins'] text-center]`}
        >
          Reviews on Google
        </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
