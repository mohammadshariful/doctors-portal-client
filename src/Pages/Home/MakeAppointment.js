import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";
const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold">Appoinment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          dolorem sequi quasi voluptates dignissimos cupiditate iure nam tempora
          voluptate sapiente sed harum repellat atque ullam sit, aspernatur
          quos! Dolores magni deleniti officia iste exercitationem porro eaque
          delectus minus? Iure, dolorum.
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;
