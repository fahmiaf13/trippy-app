import React from "react";
import LandingImg from "../../../assets/images/landing-page.png";

const Screen = () => {
  return (
    <div className="h-screen container mx-auto">
      <div className="flex flex-row justify-end relative ">
        <div className="w-3/4 absolute z-10 pt-3">
          <img src={LandingImg} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center h-full w-1/3">
        <div className="f-bold text-4xl text-start text-black">
          TAKE YOUR TIME <br /> LET’S FLIGHT
        </div>
        <div className="text-start">
          If you’re looking for ticket with affordable price <br /> here it is
        </div>
        <button className="bg-orange py-2 px-6 f-bold text-white">FLIGHT!</button>
      </div>
    </div>
  );
};

export default Screen;
