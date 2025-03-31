import React from "react";
import { circle, rectangle, triangle } from "./styles/stylecomponents";

function Background() {
  const rightside = (arg) => {
    return (
      <div className={`absolute w-[657.69px] h-[638.81px] ${arg}`}>
        <div className="relative">
          <div
            className={`${circle} absolute w-[311.54px] h-[311.54px] top-[327.86px] left-[52.71px]`}
          ></div>

          <div className={`${triangle} absolute top-0 left-[1.41px]`}></div>

          <div
            className={`${rectangle} absolute w-[381.55px] h-[381.55px] left-[277.53px] top-[139.31px]`}
          ></div>
        </div>
      </div>
    );
  };

  const leftside = (arg) => {
    return (
      <div
        className={`absolute w-[836px] h-[812px] ${arg}`}
      >
        <div className={`${circle} absolute w-[311.54px] h-[311.54px] top-[416px] left-[373px]`}></div>

        <div className={`${triangle} absolute top-[70px] left-[280px]`}></div>

        <div className={`${rectangle} absolute w-[381.55px] h-[381.55px] top-[173px] right-[351px]`}></div>
      </div>
    );
  };
  return (
    <>
      {rightside("top-[69px] right-[-161px]")}
      {leftside("left-[-304px] top-[913px]")}
      {rightside("top-[1760px] right-[-161px]")}
      {leftside("left-[-242px] top-[2672px]")}

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
