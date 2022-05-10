import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryBtn from "./PrimaryBtn";
const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="w-100 lg:w-1/2 mx-auto">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <PrimaryBtn />
        </div>
      </div>
    </div>
  );
};

export default Banner;
