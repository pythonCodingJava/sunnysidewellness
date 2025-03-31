import React from 'react'

function Hero() {
  return (
    <div
    style={{ marginTop: "calc(0.0486 * 100vw)", width: "calc(0.567 * 100vw)" }}
    className="flex flex-col items-center"
  >
    <h1
      style={{ fontSize: "calc(0.0375 * 100vw)" }}
      className="font-['Libre_Baskerville'] font-extrabold text-[#53683F] m-0"
    >
      Our Wall of <a className="text-[#FFC24A]">Love</a>
    </h1>
    <p
      style={{
        marginTop: "calc(0.025 * 100vw)",
        fontSize: "calc(0.016 * 100vw)",
      }}
      className="font-['Poppins'] text-center font-light mb-0"
    >
      Our Wall of Love showcases real stories of healing, relief, and renewed
      mobility from patients who trust us with their care. Let their experiences
      inspire your journey to better health!
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
            height: "calc(0.023 * 100vw)",
            marginLeft: index === 0 ? "0px" : "5.23px",
          }}
          alt=""
        />
      ))}
      <div
        style={{
          width: "calc(0.011 * 100vw)",
          height: "calc(0.023 * 100vw)",
          right: "calc(0.011 * 100vw)",
        }}
        className="bg-white relative"
      />
      <a
        style={{ fontSize: "calc(0.016 * 100vw)" }}
        className="font-['Poppins'] text-center font-light ml-0"
      >
        Reviews on Google
      </a>
    </div>
  </div>
  
  )
}

export default Hero