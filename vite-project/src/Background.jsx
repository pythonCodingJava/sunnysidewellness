import React from "react";

function Background() {
  const rightside = (left, top, right, bottom) => {
    return (
      <div
        style={{
          position: "absolute",
          width: "657.6886494988701px",
          height: "638.8076073103376px",
          top: `${top}`,
          right: `${right}`,
          left: `${left}`,
          bottom: `${bottom}`,
        }}
      >
        <div
          style={{
            height: "311.54px",
            width: "311.54px",
            position: "absolute",
            top: "327.86px",
            left: "52.71px",
          }}
          className="circle"
        ></div>
        <div
          style={{ top: "0px", left: "1.41px", position: "absolute" }}
          className="triangle"
        ></div>
        <div
          style={{
            height: "381.55px",
            width: "381.55px",
            position: "absolute",
            left: "277.53px",
            top: "139.31px",
          }}
          className="rectangle"
        ></div>
      </div>
    );
  };

  const leftside = (left, top, right, bottom) => {
    return (
      <div
        style={{
          position: "absolute",
          width: "836px",
          height: "812px",
          top: `${top}`,
          right: `${right}`,
          left: `${left}`,
          bottom: `${bottom}`,
        }}
      >
        <div
          style={{
            height: "311.54px",
            width: "311.54px",
            position: "absolute",
            top: "416px",
            left: "373px",
          }}
          className="circle"
        ></div>
        <div
          style={{ top: "70px", left: "280px", position: "absolute" }}
          className="triangle"
        ></div>
        <div
          style={{
            height: "381.55px",
            width: "381.55px",
            position: "absolute",
            top: "173px",
            right: "351px",
          }}
          className="rectangle"
        ></div>
      </div>
    );
  };
  return (
    <>
      {rightside("", "69px", "-161.09px", "")}

      {leftside("-304px", "913px", "", "")}
      {rightside("", "1760px", "-161px", "")}
      {leftside("-242px", "2672px", "", "")}
      <div
        style={{
          backdropFilter: "blur(7.73px)",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0px",
          left: "0px",
        }}
      ></div>
    </>
  );
}

export default Background;
