import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";
const DentalCare = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="w-100 lg:w-1/2 mx-auto">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default DentalCare;
