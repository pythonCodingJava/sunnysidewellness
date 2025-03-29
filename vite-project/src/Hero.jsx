import React from 'react'

function Hero() {
  return (
    <div
          style={{
            marginTop: "calc(0.0486*100vw)",
            width: "calc(0.567 * 100vw)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "calc(0.0375 * 100vw)",
              fontFamily: "Libre Baskerville",
              fontWeight: "1000",
              color: "#53683F",
              margin: "0px",
            }}
          >
            Our Wall of <a style={{ color: "#FFC24A" }}>Love</a>
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              marginTop: "calc(0.025*100vw)",
              textAlign: "center",
              fontSize: "calc(0.016 * 100vw)",
              fontWeight: "300",
              marginBottom: "0px",
            }}
          >
            Our Wall of Love showcases real stories of healing, relief, and
            renewed mobility from patients who trust us with their care. Let
            their experiences inspire your journey to better health!
          </p>
          <div
            style={{
              marginTop: "calc(0.025*100vw)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="star.png"
              style={{ height: "calc(0.023 * 100vw)", marginLeft: "5.23px" }}
              alt=""
            />
            <img
              src="star.png"
              style={{ height: "calc(0.023 * 100vw)", marginLeft: "5.23px" }}
              alt=""
            />
            <img
              src="star.png"
              style={{ height: "calc(0.023 * 100vw)", marginLeft: "5.23px" }}
              alt=""
            />
            <img
              src="star.png"
              style={{ height: "calc(0.023 * 100vw)", marginLeft: "5.23px" }}
              alt=""
            />
            <img
              src="star.png"
              style={{ height: "calc(0.023 * 100vw)", marginLeft: "5.23px" }}
              alt=""
            />
            <div
              style={{
                width: "calc(0.011 * 100vw)",
                height: "calc(0.023 * 100vw)",
                backgroundColor: "white",
                position: "relative",
                right: "calc(0.011 * 100vw)",
              }}
            />
            <a
              style={{
                fontFamily: "Poppins",
                marginLeft: "0px",
                textAlign: "center",
                fontSize: "calc(0.016 * 100vw)",
                fontWeight: "300",
              }}
            >
              Reviews on Google
            </a>
          </div>
        </div>
  )
}

export default Hero